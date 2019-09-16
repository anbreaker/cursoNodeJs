'use strict';

let events = require('events');
let myEmitter = new events.EventEmitter();

myEmitter.on('Llamar telefono', sonarTelefono);
myEmitter.on('Llamar telefono', vibrarTelefono);


function sonarTelefono() {

    console.log('Ring Ring Ring');
}

function vibrarTelefono(quien) {
    if (quien === 'madre'){
        return;
    }
    console.log('brr brr brr');
}

myEmitter.emit('Llamar telefono', 'madre');