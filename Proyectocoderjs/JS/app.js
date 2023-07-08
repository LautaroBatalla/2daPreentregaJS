console.log("Esta conectado")

// Objeto Tarea
function Tarea(nombre, prioridad) {
  this.nombre = nombre;
  this.prioridad = prioridad;
}

// Array para almacenar las tareas
var listaTareas = [];

// Función para agregar una tarea
function agregarTarea() {
  var nombre = prompt("Ingrese el nombre de la tarea:");
  var prioridad = prompt("Ingrese la prioridad de la tarea:");

  var tarea = new Tarea(nombre, prioridad);
  listaTareas.push(tarea);

  console.log("Tarea agregada:", tarea);
}

// Función para buscar una tarea
function buscarTarea() {
  var nombre = prompt("Ingrese el nombre de la tarea a buscar:");

  var tareaEncontrada = listaTareas.find(function(tarea) {
    return tarea.nombre.toLowerCase() === nombre.toLowerCase();
  });

  if (tareaEncontrada) {
    console.log("Tarea encontrada:", tareaEncontrada);
  } else {
    console.log("La tarea no existe.");
  }
}

// Función para filtrar tareas por prioridad
function filtrarTareas() {
  var prioridad = prompt("Ingrese la prioridad para filtrar las tareas:");

  var tareasFiltradas = listaTareas.filter(function(tarea) {
    return tarea.prioridad.toLowerCase() === prioridad.toLowerCase();
  });

  if (tareasFiltradas.length > 0) {
    console.log("Tareas encontradas:");
    tareasFiltradas.forEach(function(tarea) {
      console.log(tarea);
    });
  } else {
    console.log("No se encontraron tareas con esa prioridad.");
  }
}

