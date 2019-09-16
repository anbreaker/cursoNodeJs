'use strict';

// Informacion de proceso
let info = {
    pid: process.pid,
    version: process.version,
    platform: process.platform,
    title: process.title,
    argumentos: process.argv,
    exceptPath: process.exceptPath,
    carpetaDelScript: process.cwd()
};

//console.log(`Miramos info: ${info}`);       //Muestra: Miramos info: [object Object]
console.log('Miramos info', info);          //Muestra: Miramos info { pid: 7833 }

process.on('exit', function(){
    console.log('Al terminar me despido');
})

console.log('Fin del proceso');

process.exit(0); //Termina la ejecucion (forzandola)

console.log('El proceso termino por tanto, esto no se ejecuta');