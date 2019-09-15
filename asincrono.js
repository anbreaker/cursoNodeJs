"use strict" // Usando el modo estricto de js

console.log('Empiezo');

//Usando callBack
function suma(n1, n2, callBack) {
    var resultado = n1 + n2;
    callBack(resultado);
}
// suma(1, 5, function(resultado) {
//     console.log(resultado);
// });

//callBack y espera un tiempo

function escribeTrasDosSegundos (texto, callBack){
    setTimeout(function() {
        console.log(texto);
        callBack();
    }, 3000);
}

escribeTrasDosSegundos('Texto 1 ', function(){
    console.log('Fin 1');
    escribeTrasDosSegundos('Texto 2', function(){
        console.log('Fin 2');
    });
});
