const desc = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
}

const completado = {
    default: true,
        alias: 'c',
        des: 'Marca como completado o pendiente la tarea',
        type: 'boolean'
}

const argv = require('yargs')
    .command('crear', 'Crea un nuevo elemento por hacer', {desc})
    .command('actualizar', 'Actualiza el estado completado de una tarea',{
        desc,
        completado
    })
    .command('listar', 'Muestra todas las tareas por hacer')
    .command('eliminar', 'Elimina la tarea seleccionada', {desc})
    .help()
    .argv;

module.exports = {
    argv
}

 