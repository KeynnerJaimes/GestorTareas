document.addEventListener("DOMContentLoaded", function () {
    const formularioTarea = document.getElementById("formulario-tarea");
    const entradaTarea = document.getElementById("entrada-tarea");
    const listaTareasAlto = document.getElementById("lista-tareas-alto");
    const listaTareasBajo = document.getElementById("lista-tareas-bajo");

    formularioTarea.addEventListener("submit", function (event) {
        event.preventDefault();
        const textoTarea = entradaTarea.value.trim();
        
        const esAlto = document.getElementById("alto").checked;
        const esBajo = document.getElementById("bajo").checked;

        if (textoTarea !== "" && (esAlto || esBajo)) {
            if (esAlto) {
                agregarTarea(textoTarea, listaTareasAlto);
            } else if (esBajo) {
                agregarTarea(textoTarea, listaTareasBajo);
            }

            entradaTarea.value = "";
            document.getElementById("alto").checked = false;
            document.getElementById("bajo").checked = false;
        }
    });

    function agregarTarea(textoTarea, listaTareas) {
        const elementoTarea = document.createElement("li");
        elementoTarea.classList.add("elemento-tarea");

        const contenidoTarea = document.createElement("span");
        contenidoTarea.textContent = textoTarea;

        const botonCompletar = document.createElement("button");
        botonCompletar.textContent = "Completado";
        botonCompletar.classList.add("boton-completar");

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("boton-eliminar");

        botonCompletar.addEventListener("click", function () {
            elementoTarea.classList.toggle("completada");
        });

        botonEliminar.addEventListener("click", function () {
            listaTareas.removeChild(elementoTarea);
        });

        elementoTarea.appendChild(contenidoTarea);
        elementoTarea.appendChild(botonCompletar);
        elementoTarea.appendChild(botonEliminar);

        listaTareas.appendChild(elementoTarea);
    }
});
