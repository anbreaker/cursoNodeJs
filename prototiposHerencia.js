'use strict';
function Persona (nombre){
    this.nombre = nombre;
}

let persona = new Persona('Neo');

console.log(persona.nombre);

Persona.prototype.saluda = function (){
    console.log(`Hola me llamo ${this.nombre}`);
};

persona.saluda()

//Herencia basada en prototipos
// --- Heredando de Persona ---

function Agente(nombre) {
    Persona.call(this, nombre);
    //Esto ejecuta el constructor de persona con el this de Agente
    // definiendo el this de agente una propiedad nombre
    //y asignandole el parametro recibido
}

// Le asignamos como prototipo una persona.

Agente.prototype = new Persona('Soy un Prototipo');

let agente = new Agente('Smith');
agente.saluda();

console.log(
    Object.getPrototypeOf(agente),
    agente instanceof Agente,
    agente instanceof Persona,
    agente instanceof Object
    );


    // --- Heredando Múltiple ---

function SuperHeroe() {
    this.vuela = function () {
        console.log(`${this.nombre} vuela`);
    };
    this.esquivaBalas = function (){
        console.log(`${this.nombre} esquiva balas`);
    }
}

Object.assign(Agente.prototype, new SuperHeroe());

agente.vuela();
agente.esquivaBalas();