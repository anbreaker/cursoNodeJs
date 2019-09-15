'use strict';
//Closures
// Un closure se construye con una función (A) que devuelve otra (B).
// La función devuelta (B), sigue manteniendo el acceso a todas las
// variables de la función que la creó (A).

// Con Objetos

function crearAgente(nombre) {
    let edad = 0;
    return {
        ponNombre: function (){
            nombre = nuevoNombre;
        },
        leeNombre: function(){
            return nombre;
        },
        ponEdad: function(nuevaEdad){
            edad = nuevaEdad;
        },
        leeEdad: function(){
            return edad;
        },
        escribe: function(){
            console.log(`Soy ${nombre} y tengo ${edad} años`);
        }
    }
}

// Creamos Agentes

let smith = crearAgente('Smith');
smith.ponEdad(33);

let jones = crearAgente('Jones');
jones.ponEdad(40);

console.log(`${smith.leeNombre()} de edad ${smith.leeEdad()}`);
console.log(`${jones.leeNombre()} de edad ${jones.leeEdad()}`);

setTimeout(smith.escribe, 1000);