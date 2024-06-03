// Array de tareas predefinidas
let listaTareas = [
    { id: 1, name: "Nacer" },
    { id: 2, name: "Comer" },
    { id: 3, name: "Morir" }
];

// Variable para que el ID que aguregue el usuario se agurege a la lista
let proximoId = listaTareas.length + 1;



// Función 1 ---> para mostrar las tareas
const mostrarTareas = () => {
    // console.clear para limpiar la consola cada vez que se actualice una tarea
    console.clear(); 

    console.log("Lista de Tareas:");
    listaTareas.forEach((tarea, id) => {
        console.log(`${id + 1}. ${tarea.name}`);
    });
    
    console.log(`Total de Tareas: ${listaTareas.length}`);
};


// Función 2 ---> para agregar una tarea
const agregarTarea = () => {
    const nombreTarea = prompt("Ingrese el nombre de la tarea:");
    if (nombreTarea) {
listaTareas.push({
    id: proximoId,
    name: nombreTarea.toLowerCase(),
})
proximoId++;
mostrarTareas();
    } else {
        alert("No se ingresó una tarea.");
    }
};


// Función 3 ---> para eliminar una tarea por nombre
const eliminarTareaPorNombre = (nombre) => {
    const findTarea = listaTareas.findIndex((tarea) => tarea.name.toLowerCase() === nombre.toLowerCase()); // Convertir  a minúscula 
    if (findTarea !== -1) {
        listaTareas.splice(findTarea, 1);
        proximoId--; // Disminuir el ID disponible después de eliminar una tarea
        mostrarTareas();
    } else {
        alert("Tarea no encontrada.");
    }
};


// FUNCIÓN PRINCIPAL --->  PROMPT --->  para ingresar tareas y tener interacción con usuario por navegador
const manejarOpciones = () => {
    let opcion = '';

    // Bucle WHILE ---> opciones
    while (opcion !== '3') {
        mostrarTareas();
        opcion = prompt("Seleccione una opción:\n1. Agregar Tarea\n2. Eliminar Tarea por Nombre\n3. Salir");

        switch (opcion) {
            case '1':
                agregarTarea();
                break;
            case '2':
                const nombreEliminar = prompt("Ingrese el nombre de la tarea a eliminar:");
                eliminarTareaPorNombre(nombreEliminar);
                break;
            case '3':
                console.log("Has salido");
                break;
            default:
                alert("Opción no válida. Intentalo nuevamente");
        }
    }
};

// llamado a la funcion del prompt
manejarOpciones();

