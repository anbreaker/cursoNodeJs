let empleado = {
    nombre: "Smith",
    profesion: "Agente",
    edad: 42,
    armas: ["pistola", "rifle", "kungfu"]
};

console.log(empleado);

let serializado = JSON.stringify(empleado);

console.log("Objeto a String ->", serializado);

//des-serializar el objeto, simulando un error de lectura

let leido;
serializado = serializado + "+"; // Forzamos el fallo de lectura

try {
    leido = JSON.parse(serializado);
} catch (error) {
    console.log('No se pudo leer el JSON "serializado"');
}

if (typeof leido != "undefined") {
    console.log("Hay algo leido");
} else {
    console.log("No hay nada leido");
}

for (let i = 0; i < empleado.armas.length; i++) {
    let arma = empleado.armas[i];
    console.log(
        empleado.nombre + (arma == "kungfu" ? " sabe " : " tine ") + arma
    );
}


//Ejemplos hoisting
x = 10;
function foo() {
    var y = 30;
    var bar = new Function('console.log(x), console.log(y)');
    bar();
}
// x = 10
// y = undefined
