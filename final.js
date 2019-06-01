
var combat_id = localStorage.getItem('combat_id');
var token = localStorage.getItem('token');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'combats-api/status?token=' + token + '&combat_id=' + combat_id, true);
xhr.send();
xhr.onload = function () {
    var warObject = JSON.parse(xhr.responseText);

    document.getElementById('myName').innerText+=warObject.combat.you.username;
    document.getElementById('enemyName').innerText+=warObject.combat.you.username;
    document.getElementById('myScore').innerText+= 30 - warObject.combat.enemy.health;
    document.getElementById('enemyScore').innerText+= 30 - warObject.combat.you.health;
    document.getElementById('youHealth').innerText+= warObject.combat.you.health;
    document.getElementById('enemyHealth').innerText+= warObject.combat.you.health;

    var youStatus;
    var enemyStatus;

    if(+warObject.combat.you.health === 0){
        youStatus = document.getElementById('youStatus');
        youStatus.style = "color:red;";
        youStatus.innerText+='Поражение';

        enemyStatus = document.getElementById('enemyStatus');
        enemyStatus.style = "color:green;";
        enemyStatus.innerText+='Победа';
    } else {
        youStatus = document.getElementById('youStatus');
        youStatus.style = "color:green;";
        youStatus.innerText+='Победа';

        enemyStatus = document.getElementById('enemyStatus');
        enemyStatus.style = "color:red;";
        enemyStatus.innerText+='Поражение';
    }
};

