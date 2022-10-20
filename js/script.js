// ESTO ES VIEJO UN PRIMER INTENTO

/* class Registro {
    constructor(objeto){
        this.nombre = objeto.nombreUser;
        this.nacimiento = objeto.fechaNacimiento;
        this.telefono = objeto.telefono;
        this.email = objeto.email;
        this.formaPago = objeto.formaPago;
        this.fecha = new Date();
        this.fecha_contacto = fecha.getDate() + " " + (fecha.getMonth() - 1) + " " + this.fecha.getFullYear();
    }
}
function guardarRegistro() {
    let registroNombre = document.getElementById("registroNombre").value;
    let registroNacimiento = document.getElementById("registroNacimiento").value;
    let registroTelefono = document.getElementById("registroTelefono").value;
    let registroEmail = document.getElementById("registroEmail").value;
    let registroFormaPago = document.getElementById("registroFormaPago").value;
    const datosContacto = {nombre:registroNombre, nacimiento:registroNacimiento, telefono:registroTelefono, email:registroEmail, formaPago:registroFormaPago};
    console.log(datosContacto)
};
document.getElementById("enviar").addEventListener("click", guardarRegistro()); */

// NO TOCAR ARRIBA 

// NUEVA PRUEBA

const nombre = document.getElementById('nombres')
console.log(nombre)

// const apellido = prompt("Ingrese su  apellido")
// const edad = prompt("Ingrese su edad")
// const pais = prompt("Ingrese su pais")
// const cuidad = prompt("Ingrese su  cuidad")
// const email = prompt("Ingrese su email")
// const telefono = prompt("Ingrese  su  telefono")
// const identificacionMax = 10000;
// const identificacionMin = 0;
// function numberUser(min, max){
//     return Math.floor(Math.random() * (max - min) + min);
// };


// const datosUsuarios = [];

// function Formulario (nombre, apellido, edad, pais, cuidad, email, telefono) {
//     this.id = numberUser(identificacionMin, identificacionMax),
//     this.nombre = nombre,
//     this.apellido = apellido,
//     this.edad = edad,
//     this.pais = pais,
//     this.cuidad = cuidad,
//     this.email = email,
//     this.telefono = telefono
// }

// const nuevoUsuario = new Formulario(nombre, apellido, edad, pais, cuidad, email,telefono)

// console.log(nuevoUsuario);



// function cargarUsuario (arr, valor) {
//     arr.push(valor);
// }
// cargarUsuario(datosUsuarios, nuevoUsuario);

// console.log(datosUsuarios);
 
// // FOR OF ? PARA RECORRER EL ARRAY, FILTER PARA DEVOLVER ID DE USER A TRAVEZ DE UN MAP

// const cantidadUsers = datosUsuarios.map((el) => { return el.id})

// console.log(cantidadUsers);