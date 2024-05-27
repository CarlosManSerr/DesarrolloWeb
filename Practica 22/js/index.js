let formulario = document.getElementById("formularioAgregar");
let formularioEditar = document.getElementById("formularioEditar");
let nombre = document.getElementById("nombre");
let fecha = document.getElementById("fecha");
let descripcion = document.getElementById("descripcion");
let nombreEditar = document.getElementById("nombreEditar");
let fechaEditar = document.getElementById("fechaEditar");
let descripcionEditar = document.getElementById("descripcionEditar");
let listaTareas = document.getElementById("listaTareas");
let btnGuardarEditar = document.getElementById("btnGuardarEditar");

let tareas = [
    {
        nombre: "Carlos",
        fecha: "2024-05-14",
        descripcion: "Aprender JS"
    },
    {
        nombre: "Paco",
        fecha: "2024-05-14",
        descripcion: "Hacer tortas para todos"
    },
    {
        nombre: "Luis",
        fecha: "2024-05-14",
        descripcion: "Ver la película Silk Road"
    }
];

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    agregarDatos();
    mostrarTareas();
    cerrarModal('nuevoModal');
    formulario.reset();
});

formularioEditar.addEventListener("submit", (e) => {
    e.preventDefault();
    guardarEdicion();
    mostrarTareas();
    cerrarModal('editarModal');
});

let agregarDatos = () => {
    let tarea = {
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value
    };
    tareas.push(tarea);
};

let mostrarTareas = () => {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, indice) => {
        listaTareas.innerHTML += `
            <div class="row my-2">
                <div class="col-12 col-md-3 border p-3">
                    <strong>${tarea.nombre}</strong>
                </div>
                <div class="col-12 col-md-3 border p-3">
                    <strong>${tarea.fecha}</strong>
                </div>
                <div class="col-12 col-md-3 border p-3">
                    <strong>${tarea.descripcion}</strong>
                </div>
                <div class="col-12 col-md-3 border p-3 text-center">
                    <button class="btn btn-primary" onclick="editarTarea(${indice})" data-bs-toggle="modal" data-bs-target="#editarModal"><i class="bi bi-pencil-fill"></i> Editar</button>
                    <button class="btn btn-danger" onclick="borrarTarea(this, ${indice})"><i class="bi bi-trash3"></i> Borrar</button>
                </div>
            </div>
        `;
    });
};

let cerrarModal = (modalId) => {
    let modalElement = document.getElementById(modalId);
    let modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();
};

window.borrarTarea = (boton, indice) => {
    if (confirm("¿Estás seguro de borrarlo?")) {
        tareas.splice(indice, 1);
        mostrarTareas();
    }
};

window.editarTarea = (indice) => {
    let tarea = tareas[indice];
    nombreEditar.value = tarea.nombre;
    fechaEditar.value = tarea.fecha;
    descripcionEditar.value = tarea.descripcion;
    btnGuardarEditar.onclick = function () {
        guardarEdicion(indice);
    };
};

let guardarEdicion = (indice) => {
    tareas[indice] = {
        nombre: nombreEditar.value,
        fecha: fechaEditar.value,
        descripcion: descripcionEditar.value
    };
};

mostrarTareas();