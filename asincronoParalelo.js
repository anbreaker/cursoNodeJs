"use strict" // Usando el modo estricto de js

console.log('Empiezo');

function escribeTrasDosSegundos (texto, callBack){
    setTimeout(function() {
        console.log(texto);
        callBack();
    }, 1000);
}

// Bucle asincrono en paralelo      // Calbackĸł ↓

let acabados = 0
for (let i = 0; i < 5; i++) {
    escribeTrasDosSegundos('Texto ' + (i + 1), function(){
        acabados++
        if (acabados >= 5){
            console.log('fin');
        }
    });
}