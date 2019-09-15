"use strict";

let fs = require("fs");
let path = require("path");

let versionModulo = function(moduleName, callBack) {
    let fichero = path.join("./node_modules", moduleName, "package.json");

    fs.readFile(fichero, "utf8", function(error, data) {
        if (error) {
            //console.log(error, data);
            callBack(error);
            return;
        }
        // si no ha habido error
        //Convertimos el contenido en un objeto
        let packageJson = {};
        try{
            packageJson = JSON.parse(data);
        } catch (e){
            callBack(`Error al pasear el JSON el fichero -> ${fichero}`);
            return;
        }

        if (packageJson && !packageJson.version){
            callBack(`No se encuentra la etiqueta "version" en ${fichero}`);
            return;
        }
        callBack(null, packageJson.version);
    });
};

//Uso de la funcion
let modulo = "chance";

//funcion callBack 
versionModulo(modulo, function(error, version) {
    if (error) {
        console.log("Hubo un error", error);
        return;
    }

    console.log(`La version del modulo ${modulo} es ${version}`);
});
