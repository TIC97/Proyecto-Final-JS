const nombre = document.getElementById('nombre'),
    apellido = document.getElementById('apellido'),
    email = document.getElementById('email'),
    telefono = document.getElementById('telefono'),
    pais = document.getElementById('pais'),
    ciudad = document.getElementById('ciudad'),
    password = document.getElementById('password'),
    botonRegistro = document.querySelector(".btn");


const registro = document.getElementById('form-register');

function numberUser(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

// *** FUNCION BORRAR CAMPOS
function borrarCampo() {
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    telefono.value = "";
    pais.value = "";
    ciudad.value = "";
    password.value = "";
}

function controlCampos(){
    if (nombre.value == "" || apellido.value =="" || email.value == "" || telefono.value =="" || pais.value == "" || ciudad.value == "" || password.value == ""){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Verifica los campos !!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    } else {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Exito !!',
            text:'Registro Exitoso',
            showConfirmButton: false,
            timer: 1500
          })
    }
}
const datosUsuarios = [];

// CONVERSION A JSON A STRING (DATOS DE USUARIO) SINO ARRAY VACIO !!! (NO ME FUNCIONA)

/* if (localStorage.getItem("usuario")) {
    datosUsuarios = JSON.parse(localStorage.getItem("usuario"));
} else {
    datosUsuarios = [] ;
} */

function guardarLS() {
    localStorage.setItem("usuario", JSON.stringify(datosUsuarios))
};


// ***DOM (MODIFICO EL INPUT DE REGISTRO)
botonRegistro.value = 'Registrarme !!!';

// ***ARRAY DE USAURIOS !!!

// const datosUsuarios = [];

// ***FUNCION COSNTRUCTORA !!!
const identificacionMax = 10000;
const identificacionMin = 0;
class Formulario {
    constructor(nombre, apellido, email, telefono, pais, ciudad, password) {
        this.id = numberUser(identificacionMin, identificacionMax),
            this.nombre = nombre,
            this.apellido = apellido,
            this.email = email,
            this.telefono = telefono,
            this.pais = pais,
            this.ciudad = ciudad,
            this.password = password;
    }
}



registro.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target);
    const nombre = document.getElementById('nombre').value,
        apellido = document.getElementById('apellido').value,
        email = document.getElementById('email').value,
        telefono = document.getElementById('telefono').value,
        pais = document.getElementById('pais').value,
        ciudad = document.getElementById('ciudad').value,
        password = document.getElementById('password').value;
    controlCampos()
    const nuevoUsuario = new Formulario(nombre, apellido, email, telefono, pais, ciudad, password)
    datosUsuarios.push(nuevoUsuario)
    borrarCampo()
    console.log(datosUsuarios)
    // *** DATOS DE STRING A JSON !!! 
    guardarLS(nuevoUsuario)
    /* localStorage.setItem("usuario", JSON.stringify(datosUsuarios)) */
})


// const cantidadUsers = datosUsuarios.map((el) => { return el.id})

// console.log(cantidadUsers);