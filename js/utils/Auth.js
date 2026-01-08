var Auth = (function() {

    function isLoggedIn() {
        return Storage.isLoggedIn();
    }

    function login(){
        Storage.setLoggedIn(true);
    }

    function logout(){
        Storage.clearSession();
    }

    function getCurrentUser() {
        return Storage.getUser();
    }

    function requireLogin(redirectUrl){
           redirectUrl = redirectUrl || '../pages/login.html';
        if (!isLoggedIn()) {
            window.location.href = redirectUrl;
            return false;
        }
        return true;
    }

    return {
        isLoggedIn: isLoggedIn,
        requireLogin: requireLogin,
        logout: logout,
        login: login,
        getCurrentUser: getCurrentUser
    };
})();

