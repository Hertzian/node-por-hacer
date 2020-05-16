// requires
const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./porHacer/porHacer');

let comando = argv._[0];

switch(comando){
    case 'crear':
        // console.log('Crear nueva tarea por hacer');
        let tarea = porHacer.crear(argv.desc);
        console.log(tarea);
    break;

    case 'listar':
        let listado = porHacer.getListado();


        for(let tarea of listado){
            console.log('------Por Hacer------'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('---------------------'.green);
        }
    break;
    
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.desc, argv.completado);
        console.log(actualizado);
        break;
        
    case 'eliminar':
        let borrado = porHacer.eliminar(argv.desc);
        console.log(borrado);
    break;

    default:
        console.log('Comando no reconocido');
}