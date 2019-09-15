"use strict" // Usando el modo estricto de js

console.log('Empiezo');

function escribeTrasDosSegundos (texto, callBack){
    setTimeout(function() {
        console.log(texto);
        callBack();
    }, 1000);
}

// Bucle asincrono en Serie

//Funcion recursiva, llamamos N veces en serie, al finalizar llamar
//Al callBack de finalizacion
function serie(nVeces, func, callBackFin) {
    if (nVeces == 0){
        callBackFin();
        return;
    }
    nVeces--;
    func(nVeces, function () {
        serie(nVeces, func, callBackFin);
    })
}

serie(5, escribeTrasDosSegundos, function () {
    console.log('He terminado');
});