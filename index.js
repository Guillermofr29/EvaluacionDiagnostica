/*Realizar un algoritmo que maneje una lista de usuarios, permitiendo agregar, listar,
actualizar y eliminar usuarios.*/

//https://evaluacion-diagnostica.vercel.app (Para visualizar el crud)

// Guardar los usuarios en el localStorage
function guardarUsuarios(usuarios) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Obtener los usuarios del localStorage
function obtenerUsuarios() {
    const usuarios = localStorage.getItem('usuarios');
    return usuarios ? JSON.parse(usuarios) : [];
}


// Mostrar la lista de usuarios
function cargarListaUsuarios() {
    const listaUsuarios = document.getElementById('listaUsuarios');
    const usuarios = obtenerUsuarios();
    listaUsuarios.innerHTML = '';

    usuarios.forEach((usuario, id) => {
        const listaItem = document.createElement('li');
        listaItem.innerHTML = `Nombre: ${usuario.usuario} | Edad: ${usuario.edad} años <button onclick="editarUsuario(${id})">Editar <i class="fa-solid fa-pen-to-square"></i></button> <button onclick="eliminarUsuario(${id})">Eliminar <i class="fa-solid fa-trash"></i></button>`;
        listaUsuarios.appendChild(listaItem);
    });
}

// Agregar un nuevo usuario
function agregarUsuario() {
    const usuario = document.getElementById('usuario').value;
    const edad = document.getElementById('edad').value;
    const contraseña = document.getElementById('contraseña').value;

    if (usuario && edad && contraseña) {
        const usuarios = obtenerUsuarios();
        usuarios.push({ usuario, edad, contraseña });
        guardarUsuarios(usuarios);
        limpiarFormulario();
        cargarListaUsuarios();
    } else {
        alert("Completa todos los campos");
    }
}

// Editar un usuario
function editarUsuario(id) {
    const usuarios = obtenerUsuarios();
    const usuario = usuarios[id];
    
    document.getElementById('usuario').value = usuario.usuario;
    document.getElementById('edad').value = usuario.edad;
    document.getElementById('contraseña').value = usuario.contraseña;

    const agregarBtn = document.querySelector('button[onclick="agregarUsuario()"]');
    agregarBtn.style.display = 'none';
    
    const actualizarBtn = document.querySelector('button[onclick="actualizarUsuario()"]');
    actualizarBtn.style.display = 'inline-block';
    
    actualizarBtn.onclick = function () {
        actualizarUsuario(id);
    };
}

// Actualizar un usuario
function actualizarUsuario(id) {
    const usuario = document.getElementById('usuario').value;
    const edad = document.getElementById('edad').value;
    const contraseña = document.getElementById('contraseña').value;

    if (usuario && edad && contraseña) {
        const usuarios = obtenerUsuarios();
        usuarios[id] = { usuario, edad, contraseña };
        guardarUsuarios(usuarios);
        limpiarFormulario();
        cargarListaUsuarios();
        
        const actualizarBtn = document.querySelector('button[onclick="actualizarUsuario()"]');
        actualizarBtn.style.display = 'none';
        
        const agregarBtn = document.querySelector('button[onclick="agregarUsuario()"]');
        agregarBtn.style.display = 'inline-block';
    } else {
        alert("Completa todos los campos");
    }
}

// Eliminar un usuario
function eliminarUsuario(id) {
    const usuarios = obtenerUsuarios();
    usuarios.splice(id, 1);
    guardarUsuarios(usuarios);
    cargarListaUsuarios();
}

// Limpiar el formulario
function limpiarFormulario() {
    document.getElementById('usuario').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('contraseña').value = '';
}

// Inicializamos la lista de usuarios cuando se carga la página
cargarListaUsuarios();




