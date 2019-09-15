"use strict" // Usando el modo estricto de js

console.log('Empiezo');

function escribeTrasUnSegundo (texto, callBack){
    setTimeout(function() {
        console.log(texto);
        callBack();
    }, 1000);
}

// Bucle asincrono en Serie

//Funcion recursiva, llamamos con array en serie, al finalizar llamar
//Al callBack de finalizacion
function serie(lista, func, callBackFin) {
    if (lista.length == 0){
        callBackFin();
        return;
    }
    func(lista.shift(), function () {
        serie(lista, func, callBackFin);
    })
}

let lista = [1,2,'tres',4,5];

serie(lista, escribeTrasUnSegundo, function(){
    console.log('He terminado');
});