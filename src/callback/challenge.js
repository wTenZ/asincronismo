const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatuschange = function (event){
        if (xhttp.readyStatus === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            }
        }else {
            const error = new Error('Error'+urlApi);
            return callback(error, null);
        }
    }
    xhttp.send();
}