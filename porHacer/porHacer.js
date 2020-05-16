const fs = require('fs');

let listadoPorHacer = [];

const guardarDb = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if(err){
            throw new Error('No se pudo grabar', err);
        }
    });
}

const cargarDb = () => {
    try{
        listadoPorHacer = require('../db/data.json');
    }catch(err){
        listadoPorHacer = [];
    }
    
}

const crear = (descripcion) => {

    cargarDb();

    let porHacer = {
        descripcion,
        completado: false,
    };

    listadoPorHacer.push(porHacer);

    guardarDb();

    return porHacer;
}

const getListado = () => {
    
    cargarDb();

    return listadoPorHacer;

};

const actualizar = (desc, completado = true) => {
    cargarDb();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === desc;
    });

    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;
    }else{
        return false;
    }
}

const eliminar = (desc) => {
    cargarDb();

    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== desc;
    });
    // console.log(nuevoListado);

    if(nuevoListado.length === listadoPorHacer.length){
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardarDb();

        return true;
    }


}

module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}