function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data));
}

function clearUserData() {
    sessionStorage.removeItem('userData');
}

function isLogged() {
    return !(sessionStorage.getItem('userData') === null);
}

export {
    getUserData,
    setUserData,
    clearUserData,
    isLogged,
}