var config = {
    baseUrlForAJAXQuery : 'http://localhost:3333/'
}
var POST_HEADER = {'Content-Type': 'application/x-www-form-urlencoded'};

/* принимает объект вида: {
    method : 'POST', 
    url : './some/url', 
    header : {
        nameHeader : value,
        ...
    }
    errorHandler : function(){},
    handler : function(переменная для обращения к результату выполнения запроса | res){} | что сделать когда ответит сервер
}
*/
function AJAX(configObject){
    var xhr = new XMLHttpRequest();
    xhr.open(configObject.method, configObject.url, true);
    if(configObject.header){
        for(var key in configObject.header)
            xhr.setRequestHeader(key, configObject.header[key]);
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState !== 4) return;
        if(xhr.status !== 200){
            if(configObject.errorHandler){
                configObject.errorHandler(xhr);
            }
            throw new Error(xhr.status + ': ' + xhr.statusText);
        }
        configObject.handler(JSON.parse(xhr.responseText));
    };
    return function(){
        if(configObject.body){
            xhr.send(configObject.body);
            return;
        }
        xhr.send();
        return ;
    };
};

function getToken(key){
    if(typeof key !== 'string' ){
        throw new Error(key + ', is not a string');
    }
    return localStorage.getItem(key);
}

function setToken(token){
    if(typeof token !== 'string' ){
        throw new Error(token + ', is not a string');
    }
    localStorage.setItem('token', token)
}



