const nombre = document.getElementById('nombre'),
    apellido = document.getElementById('apellido'),
    email = document.getElementById('email'),
    telefono = document.getElementById('telefono'),
    pais = document.getElementById('pais'),
    ciudad = document.getElementById('ciudad'),
    password = document.getElementById('password');


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

// ***ARRAY DE USAURIOS !!!

const datosUsuarios = [];

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
        password = document.getElementById('password').value
    const nuevoUsuario = new Formulario(nombre, apellido, email, telefono, pais, ciudad, password)
    datosUsuarios.push(nuevoUsuario)
    borrarCampo()
    console.log(datosUsuarios)
    localStorage.setItem("usuario", JSON.stringify(datosUsuarios))

})