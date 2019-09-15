'use strict';

let casa = {
    ventanas: 6,
    cuantasVentanas: function () {
        console.log(`La casa tiene ${this.ventanas} ventanas`);   
    }
};

// casa.cuantasVentanas();

setTimeout(casa.cuantasVentanas,1000);
setTimeout(casa.cuantasVentanas.bind(casa),1000);

function Coche() {
    this.ruedas = 4;
    this.cuantasRuedas = function () {
        console.log(`El coche tiene ${this.ruedas} ruedas`);
    }
}

let coche = new Coche();

coche.cuantasRuedas();
setTimeout(coche.cuantasRuedas,1000);
setTimeout(coche.cuantasRuedas.bind(coche),1000);