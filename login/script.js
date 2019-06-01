function registrationQery(body, onLoadListHandler){
    AJAX({
        method : 'POST',
        url : 'register',
        header : POST_HEADER,
        body : body,
        handler : onLoadListHandler
    })();
}

// function authQery(onLoadListHandler){
//     AJAX({
//         method : 'POST',
//         url : './api/database.json',
//         handler : onLoadListHandler
//     })();
// }

onDOMReady(function(){
    var loginButton = document.getElementsByClassName('auth-body__btn-login')[0];
    var registrationButton = document.getElementsByClassName('auth-body__btn-registration')[0];
    var loginInput = document.getElementsByClassName('auth-body__input-login')[0];
    var passwordInput = document.getElementsByClassName('auth-body__input-password')[0];

    function loginButtonHandler(event){
    }
    
    function registrationButtonHandler(event){
        event.preventDefault();
        registrationQery(
            {username : loginInput.value, password : passwordInput.value},
            function(resp){
                setUserData(resp.user.id, resp.user.token);
            }
        )
    }
    
    loginButton.onclick = loginButtonHandler;
    registrationButton.onclick = registrationButtonHandler;
})