const nombre = document.getElementById('nombre'),
    apellido = document.getElementById('apellido'),
    email = document.getElementById('email'),
    telefono = document.getElementById('telefono'),
    pais = document.getElementById('pais'),
    ciudad = document.getElementById('ciudad'),
    password = document.getElementById('password'),
    registro = document.getElementById('register');

// ***MODIFICAR EL SECTION AGREGANDO ETIQUETAS HTML POR DOM (falta modificarla !!!)
const section = document.getElementsByTagName('section')[0];

//TEST DE LAS VARIABLES DECLARADAS
console.log(nombre)
console.log(apellido);
console.log(email);
console.log(telefono);
console.log(pais);
console.log(ciudad);
console.log(password);
console.log(registro);
console.log(section);

// ***DOM (MODIFICO EL INPUT DE REGISTRO)
registro.value = 'Registro !!!';

// *** MODIFICO LA ETIQUETA SECTION (averigaur si se puede definir lo que lleva dentro el elemento de una mejoor forma)

// let crearEti = document.createElement('input');
// crearEti.className = "btn activo";
// crearEti.type = "submit"
// crearEti.value = "Registrar";

// section.appendChild(crearEti);
// ***ARRIBA AGREDO UN ELEMENTO UNICO HTML POR DOM

// ***EVENTOS
// ***CLICK EN EL BOTON REGISTRO (ME QUEDA INCORPORAR UN FILTRO QUE ME LLEVE LOS DATOS A MI ARRAY) TENGO QUE TRABAJAR CON LA PROPIEDAD TARGET ?

registro.addEventListener("click", () => {
    console.log("Click");
})

registro.addEventListener('submit', (e) => {
    e.preventDefault()
});

// ***TOMAR TODOS LOS INPUT Y QUE CON UN EVENTO CHANGE CAMBIE DE CAMPO CUANDO PRESIONE TAB (MODIFIQUE EL HTML Y LE AGREGE UNA ETIQUETA   QUE LOS HACE "tabindex")

// *** HACER UNA FUNCION QUE CAPTURE EL EVENTO UNO POR UNO

    
nombre.addEventListener('input', () =>{
    console.log(nombre.value);
});
apellido.addEventListener('input', () =>{
    console.log(apellido.value);
});
email.addEventListener('input', () =>{
    console.log(email.value);
});
telefono.addEventListener('input', () =>{
    console.log(telefono.value);
});
pais.addEventListener('input', () =>{
    console.log(pais.value);
});
ciudad.addEventListener('input', () =>{
    console.log(ciudad.value);
});
password.addEventListener('input', () =>{
    console.log(password.value);
});







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
 
// // ***FOR OF ? PARA RECORRER EL ARRAY, FILTER PARA DEVOLVER ID DE USER A TRAVEZ DE UN MAP

// const cantidadUsers = datosUsuarios.map((el) => { return el.id})

// console.log(cantidadUsers);