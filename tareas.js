const fs = require('fs');
const leerJSON = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'));


const moduloTareas = {
    listarTarea: function(tareas = leerJSON) {
        console.log(" ---TU LISTA DE TAREAS---");
        return tareas.forEach((tarea,i) => {
            console.log(`Tarea: ${i+1}- ${tarea.titulo} - ${tarea.estado}`);
        });
    },

    escribirJSON: function(tareas) {
        fs.writeFileSync('./tareas.json', JSON.stringify(tareas, null,2), 'utf-8')

    },

    agregarTarea: function(tarea) { 
        let tareas = leerJSON;
        tareas.push(tarea)
        moduloTareas.escribirJSON(tareas)
    },

    eliminarLista: function() {
        this.escribirJSON([]);
        console.log("Lista eliminada con éxito");
        
    },    

    filtrarTarea: function(estado) {
        let tareas = leerJSON;
        let tareasFiltradas = tareas.filter(tarea => tarea.estado === estado)
        return moduloTareas.listar(tareasFiltradas)
    }
}

module.exports = moduloTareas