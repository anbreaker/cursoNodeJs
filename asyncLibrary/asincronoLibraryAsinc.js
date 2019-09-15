"use strict" // Usando el modo estricto de js

//Libreria async
let async = require('async');

console.log('Empiezo');

function escribeTrasUnSegundo (texto, callBack){
    setTimeout(function() {
        console.log(texto);
        callBack();
    }, 1000);
}

// Bucle asincrono en Serie

//Funcion recursiva, llamamos con array en serie, al finalizar llamar


let lista = [1,2,'tres',4,5];

async.eachSeries(lista, escribeTrasUnSegundo, function(){
    console.log('He terminado');
});