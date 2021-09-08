let correctPassword = 'Rampoya';
let username = document.getElementById('username');
let password = document.getElementById('password');

function onloginclick() {
    let user = username.value;
    let pass = password.value;
    let iscorrect = checkCredentials(pass); 
    if (iscorrect) {
        login(user, pass);
    }
}

function sendtologin() {
    let loggedin = isloggedIn();

    if (!loggedin) {
        location.replace('/src/index.html');
    }
}

function sendtologout() {
    let loggedin = isloggedIn();

    if (loggedin) {
        location.replace('/src/logout/logout.html');
    }
}

function onload() {
    let loggedin = isloggedIn();

    if (loggedin) {
        console.log('the user is logged in.');
        location.replace('/src/logout/logout.html');
    } else {
        console.log('The user is not logged in.');
        location.replace('/src/index.html');
    }
}

function isloggedIn() {
    let pass = getPassword();
    if (pass == null) {
        return false;
    }

    return checkCredentials(pass);
}

function checkCredentials(credentials) {
    return correctPassword = credentials;
}

function login(user, pass) {
    storeUsername(user);
    storePassword(pass);
}

function storeUsername(user) {
    localStorage.setItem("Username", user);
}

function storePassword(pass) {
    localStorage.setItem("Password", pass);
}

function getUsername() {
    let user = localStorage.getItem("Username");
    return user;
}

function getPassword() {
    let pass = localStorage.getItem("Password");
    return pass;
}
