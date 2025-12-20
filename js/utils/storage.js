var Storage = (function() {

    function saveUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    function getUser() {
        var user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }

    function setLoggedIn(value) {
        localStorage.setItem('isLoggedIn', JSON.stringify(value));
    }

    function isLoggedIn() {
        var status = localStorage.getItem('isLoggedIn');
        return status ? JSON.parse(status) : false;
    }

    function clearSession() {
        localStorage.removeItem('isLoggedIn');
    }

    function removeUser() {
        localStorage.removeItem('user');
        localStorage.removeItem('isLoggedIn');
    }

    return {
        saveUser: saveUser,
        getUser: getUser,
        setLoggedIn: setLoggedIn,
        isLoggedIn: isLoggedIn,
        clearSession: clearSession,
        removeUser: removeUser
    }
})();
