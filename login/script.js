function registrationQery(onLoadListHandler){
    AJAX({
        method : 'POST',
        url : 'register',
        header : POST_HEADER,
        handler : onLoadListHandler
    })();
}

function authQery(onLoadListHandler){
    AJAX({
        method : 'POST',
        url : './api/database.json',
        handler : onLoadListHandler
    })();
}
