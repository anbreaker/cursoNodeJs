let numero = 1;
console.log(numero);
console.log(typeof numero);
numero = "hola";
console.log(typeof numero);

// String
console.log("texto de prueba".split(" "));
let textoLargo = "Linea1\n" + "Linea2\n" + "Linea3\n";
console.log(textoLargo);

let textoLargo2 = [
    "texto de prueba",
    "texto de prueba",
    "texto de prueba"
].join("\n");
console.log(textoLargo2);

var objeto = {
    numero: 3.14,
    texto: "Hola",
    suma10: function(v) {
        return v + 10;
    }
};

console.log(objeto.numero);
console.log(objeto.texto);
console.log(objeto.suma10(1));

// Array
var array = [
    1,
    'hola',
    function(v) {return `Suma v de valor ${v} + 2 -> ${(v + 2)}`},
    {valor: 'Mundo'}
]
console.log(array);
console.log(array[2](500));
console.log(array[3].valor);
console.log('Segunda forma de acceder por clave Valor:', array[3]['valor']);

//Hoisting

var x = 100;
var y = function () {
if (x === 20) {
var x = 30;
}
return x;
};
console.log( x, y() );


var x = 100;
if (x === 100) {
    var x = 30;
    return x;
}

console.log(`Hoisting duro!-> ${x}`);

// JSON

var empleado = {
    nombre: 'Thomas Anderson',
    profesion: 'Developer'
    };

// Pasamos a string, a texto
JSON.stringify(empleado)

var textoJSON = '{"nombre":"Thomas Anderson","profesion":"Developer"}';
// Pasamos un JSON a objeto
JSON.parse(textoJSON)