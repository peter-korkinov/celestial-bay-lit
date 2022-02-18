import { getUserData, setUserData, clearUserData } from "../common/util.js";

const host = 'http://localhost:8000';

async function request (url, options) {
    try {
        const response = await fetch(host + url, options);

        if(response.ok === false) {
            if(response.status === 403) {
                clearUserData();
            }
            const error = await response.json();
            throw new Error(JSON.stringify(error));
        }

        try {
            return await response.json();
        } catch(err) {
            return response;
        }

    } catch (err) {
        throw err;
    }
}

function createOptions(method = 'get', data) {
    const options = {
        method,
        headers: {},
    };

    if(data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.headers['X-CSRFToken'] = getCookie('csrftoken');
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();
    if(userData != null) {
        options.headers['Authorization'] = 'Token ' + userData.token;
    }

    return options;
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

async function get(url) {
    return request(url, createOptions());
}

async function post(url, data) {
    return request(url, createOptions('post', data));
}

async function put(url, data) {
    return request(url, createOptions('put', data));
}

async function del(url) {
    return request(url, createOptions('delete'));
}

async function login(email, password) {
    const response = await request('/users/token/', createOptions('post', {email, password}));
    const userData = {
        email: response.email,
        id: response.id,
        accessToken: response.access,
        refreshToken: response.refresh
    };
    setUserData(userData);
}

async function register(email, password) {
    const registerResponse = await request('/users/register/', createOptions('post', {email, password}));
    const authResponse = await request('/users/token/', createOptions('post', {email, password}));
    const userData = {
        email: registerResponse.email,
        id: registerResponse.id,
        accessToken: authResponse.access,
        refreshToken: authResponse.refresh
    }
    setUserData(userData);
}

async function logout() {
    await request('/users/logout/', createOptions());
    clearUserData();
    return 'Logout successful';
}

export {
    get,
    post,
    put,
    del,
    login,
    register,
    logout
};