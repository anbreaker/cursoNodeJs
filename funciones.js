'use strict';
// Funcion basica
function funcionBasica(){
    console.log('Funcion basica');
}
funcionBasica()

// Funcion con argumentos
function suma(a,b){
    return a + b
}
console.log(suma(10,5));

// Funcion como expresion
var multiplicar = function (a,b){
    return a * b;
};

console.log(multiplicar(2,4));

var lang = 'spanish';

function accesoContexto (){
    console.log('en el contexto superior -->', lang);
}

accesoContexto();

// Metodo de un objeto
let agente = {
    nombre: "Smith",
    profesion: "Agente",
    edad: 42,
    armas: ["pistola", "rifle", "kungfu"],
    saluda: function (){
        console.log(`Hola soy el agente -> ${this.nombre}`);
    }
};

agente.saluda();


//Constructor de Objetos
function Fruta(nombre){
    this.nombre = nombre;
    this.getNombre = function (){
        return nombre;
    };
    this.setNombre = function(valor){
        nombre = valor;
    };
}

//Creando objeto Fruta
let limon = new Fruta('Limon de Salva Espin (DeadLemon)');
console.log(limon.getNombre());
limon.setNombre('Manzana')
console.log(limon.getNombre());


