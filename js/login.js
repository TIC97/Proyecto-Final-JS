const emailLogin = document.getElementById('email'),
    passLogin = document.getElementById('password'), 
    inicioSesion = document.getElementById('login-ingreso');


function ingresarSesion(usuarios) {
    let userFound = datosUsuarios.find((usuarios)=> {
        return usuario.email === emailLogin.value && usuario.password === passLogin.value
    })
    if (userFound){
        //REDIRIGIR A MI PAGE DE INICIO
        window.location.href="./index.html"
    }else{
        // sweetalert ("usuario no encontrado")
        Swal.fire({
            icon: 'error',
            title: 'Usuario NO encontrado',
            text: 'Ingrese el usario correcto',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    return userFound;
};

// *** TRAER DATOS DE MI LOCAL STORAGE PARA LOGIN !!!
function recuperarLS () {
    let datos = JSON.parse(localStorage.getItem(datosUsuarios));
    return datos;
};

const usuarioLS = recuperarLS();

// ***EVENTOS DEL SUBMIT ("INICIAR SESION")
inicioSesion.addEventListener('submit', (e) => {
    e.preventDefault();
    ingresarSesion(usuarioLS)
})