document.addEventListener('DOMContentLoaded', function() {
    const listaTareas = document.getElementById('listaTareas');
    const formularioAgregar = document.getElementById('formularioAgregar');
    const formularioEditar = document.getElementById('formularioEditar');
    const toggleModeButton = document.getElementById('toggleMode');
    let tareaActual;

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

    let isDarkMode = false;

    toggleModeButton.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode', isDarkMode);
        document.body.classList.toggle('light-mode', !isDarkMode);
        toggleModeButton.innerHTML = isDarkMode ? '<i class="bi bi-sun"></i> Modo Claro' : '<i class="bi bi-moon"></i> Modo Oscuro';
    });

    formularioAgregar.addEventListener('submit', function(event) {
        event.preventDefault();
        const nuevaTarea = {
            id: Date.now(),
            nombre: formularioAgregar.nombre.value,
            fecha: formularioAgregar.fecha.value,
            descripcion: formularioAgregar.descripcion.value
        };
        tareas.push(nuevaTarea);
        formularioAgregar.reset();
        $('#nuevoModal').modal('hide');
        mostrarTareas();
    });

    formularioEditar.addEventListener('submit', function(event) {
        event.preventDefault();
        tareaActual.nombre = formularioEditar.nombreEditar.value;
        tareaActual.fecha = formularioEditar.fechaEditar.value;
        tareaActual.descripcion = formularioEditar.descripcionEditar.value;
        formularioEditar.reset();
        $('#editarModal').modal('hide');
        mostrarTareas();
    });

    function mostrarTareas() {
        listaTareas.innerHTML = '';
        tareas.forEach(tarea => {
            const tareaElemento = document.createElement('div');
            tareaElemento.classList.add('card', 'mb-3');
            tareaElemento.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${tarea.nombre}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${tarea.fecha}</h6>
                    <p class="card-text">${tarea.descripcion}</p>
                    <button class="btn btn-warning btn-sm" onclick="editarTarea(${tarea.id})"><i class="bi bi-pencil-square"></i> Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="eliminarTarea(${tarea.id})"><i class="bi bi-trash"></i> Eliminar</button>
                </div>
            `;
            listaTareas.appendChild(tareaElemento);
        });
    }

    window.editarTarea = function(id) {
        tareaActual = tareas.find(tarea => tarea.id === id);
        formularioEditar.nombreEditar.value = tareaActual.nombre;
        formularioEditar.fechaEditar.value = tareaActual.fecha;
        formularioEditar.descripcionEditar.value = tareaActual.descripcion;
        $('#editarModal').modal('show');
    };

    window.eliminarTarea = function(id) {
        tareas = tareas.filter(tarea => tarea.id !== id);
        mostrarTareas();
    };
});
