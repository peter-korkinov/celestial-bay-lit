function getUserData() {
    return JSON.parse(localStorage.getItem('userData'));
}

function setUserData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
}

function clearUserData() {
    localStorage.removeItem('userData');
}

function isLogged() {
    return !(localStorage.getItem('userData') === null);
}

export {
    getUserData,
    setUserData,
    clearUserData,
    isLogged,
}