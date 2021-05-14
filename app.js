const process = require('process');

const {listarTarea, agregarTarea, filtrarTarea, eliminarLista} = require('./tareas')
const proceso = process.argv[2]

switch(proceso) {
    case 'listar':
        listarTarea()
        break;
    case 'listarPorEstado':
            process.argv.length>=4 ? 
            funciones.listarPorEstado(process.argv[3]):console.log("Error, faltan datos");
            break;    
    case 'agregar':
        let tarea = {
            titulo : process.argv[3],
            estado : process.argv[4]
        }
        agregarTarea(tarea)
        break;
    case 'eliminarLista':
        eliminarLista()
        break;   
    case 'filtrar':
        filtrarTarea(process.argv[3])
        break;
    case undefined :
        console.log('Bienvenido a tu app de Notas, a continuacion te dejo una lista de los comandos disponibles: listar, agregar, filtrar, eliminar');
        break;
    default:
        console.log('Debes de ingresar uno de los comandos disponibles. Muchas gracias');
        break;           
}