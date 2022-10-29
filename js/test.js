const nombre = document.getElementById('nombre'),
    apellido = document.getElementById('apellido'),
    email = document.getElementById('email'),
    telefono = document.getElementById('telefono'),
    pais = document.getElementById('pais'),
    ciudad = document.getElementById('ciudad'),
    password = document.getElementById('password'),
    registro = document.getElementById('register');

// ***MODIFICAR EL form AGREGANDO ETIQUETAS HTML POR DOM (falta modificarla !!!)
// const form = document.getElementsByTagName('section')[0];
const form = document.getElementById('form-register');

//TEST DE LAS VARIABLES DECLARADAS
/* console.log(nombre)
console.log(apellido);
console.log(email);
console.log(telefono);
console.log(pais);
console.log(ciudad);
console.log(password);
console.log(registro);
console.log(form);
 */
// ***DOM (MODIFICO EL INPUT DE REGISTRO)
registro.value = 'Registro !!!';


// *** EVENTOS Y LOCASTORAGE !!!
// *** CLICK EN EL BOTON REGISTRO (ME QUEDA INCORPORAR UN FILTRO QUE ME LLEVE LOS DATOS A MI ARRAY) TENGO QUE TRABAJAR CON LA PROPIEDAD TARGET ?

registro.addEventListener("click", () => {
    console.log("Click");
})

registro.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target);
    localStorage.setItem("Nombre", nombreForm)
    localStorage.setItem("Apellido", apellidoForm)
    localStorage.setItem("Email", emailForm)
    localStorage.setItem("Telefono", telefonoForm)
    localStorage.setItem("Pais", paisForm)
    localStorage.setItem("Ciudad", ciudadForm)
    localStorage.setItem("Contraseña", passwordForm)
});

// form.addEventListener('submit', () => {
//     localStorage.setItem("Nombre", nombreForm)
//     localStorage.setItem("Apellido", apellidoForm)
//     localStorage.setItem("Email", emailForm)
//     localStorage.setItem("Telefono", telefono.For)
//     localStorage.setItem("Pais", paisForm)
//     localStorage.setItem("Ciudad", ciudadForm)
//     localStorage.setItem("Contraseña", passwordForm)
// });

/* const guardarArray = () => {
    JSON.parse(localStorage.getItem(datosUsuarios)) || [];
};
guardarArray(); */
// ***TOMAR TODOS LOS INPUT Y QUE CON UN EVENTO CHANGE CAMBIE DE CAMPO CUANDO PRESIONE TAB (MODIFIQUE EL HTML Y LE AGREGE UNA ETIQUETA   QUE LOS HACE "tabindex")

// *** HACER UNA FUNCION QUE CAPTURE EL EVENTO UNO POR UNO(NO SE DEBE CAPTURAR UNO POR UNO SINO EL OBJETO ENTERO)

    
const nombreForm = document.getElementById('nombre').value,
    apellidoForm = document.getElementById('apellido').value,
    emailForm = document.getElementById('email').value,
    telefonoForm = document.getElementById('telefono').value,
    paisForm = document.getElementById('pais').value,
    ciudadForm = document.getElementById('ciudad').value,
    passwordForm = document.getElementById('password').value;

// ***FUNCIONES !!!
// ***FUNCION ID RANDOM 

const identificacionMax = 10000;
const identificacionMin = 0;
function numberUser(min, max){
    return Math.floor(Math.random() * (max - min) + min);
};

// ***ARRAY DE USAURIOS !!!

const datosUsuarios = [];

// ***FUNCION COSNTRUCTORA !!!

function Formulario (nombre, apellido, email, telefono, pais, ciudad, password) {
    this.id = numberUser(identificacionMin, identificacionMax),
    this.nombre = nombreForm,
    this.apellido = apellidoForm,
    this.email = emailForm,
    this.telefono = telefonoForm,
    this.pais = paisForm,
    this.ciudad = ciudadForm,
    this.password = passwordForm
}

const nuevoUsuario = new Formulario(nombreForm, apellidoForm, emailForm, telefonoForm, paisForm, ciudadForm, passwordForm)

// console.log(nuevoUsuario);

// ***FUNCION DE PUSH AL ARRAY USUARIOS !!!

/* function cargarUsuario (arr, valor) {
    arr.push(valor);
};
cargarUsuario(datosUsuarios, nuevoUsuario); */
datosUsuarios.push(nuevoUsuario);

console.log(datosUsuarios);

// ***DATOS EN JSON !!!
localStorage.setItem("usuario", JSON.stringify(nuevoUsuario))
// const enJSON = JSON.stringify(nuevoUsuario);
// console.log(enJSON); 

// // ***FOR OF ? PARA RECORRER EL ARRAY, FILTER PARA DEVOLVER ID DE USER A TRAVEZ DE UN MAP
//  (***MEJORAR EL FILTRO ***)

// const cantidadUsers = datosUsuarios.map((el) => { return el.id})

// console.log(cantidadUsers);



