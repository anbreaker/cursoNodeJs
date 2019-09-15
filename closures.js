'use strict';
//Closures
// Un closure se construye con una función (A) que devuelve otra (B).
// La función devuelta (B), sigue manteniendo el acceso a todas las
// variables de la función que la creó (A).

function crearClosuer(valor) {
    return function () {
        return valor;
    }
}

let cl1 = crearClosuer(1);
console.log(cl1());

function creaSumador(valor1) {
    return function(valor2){
        return valor1 + valor2;
    }
}

let suma5 = creaSumador(5);

console.log('Suma usando un closure',suma5(10));
console.log('Suma usando un closure',suma5(25));
