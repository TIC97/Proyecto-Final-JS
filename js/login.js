const emailLogin = document.getElementById('email'),
    passLogin = document.getElementById('password'), 
    inicioSesion = document.queryCommandValue('input[type="submit"]'); 
    

function ingresarSesion(usuarios) {
    let userFound = datosUsuarios.find((usuarios)=> {
        return usuario.email === emailLogin.value && usuario.password === passLogin.value
    })
    if (userFound){
        //REDIRIGIR A MI PAGE DE INICIO
        // window.location.href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwjF7oT9x8X7AhVArpUCHXq2CTYQPAgI"
        console.log("estoy en el IF");
    }else{
        // sweetalert ("usuario no encontrado")
        Swal.fire({
            icon: 'error',
            title: 'Usuario NO encontrado',
            text: 'Ingrese el usario correcto',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    console.log("afuera del condicional");
    return userFound;
};

// *** TRAER DATOS DE MI LOCAL STORAGE PARA LOGIN !!!
function recuperarLS () {
    let datos = JSON.parse(localStorage.getItem("datosUsuarios"));
    return datos;
};

const usuarioLS = recuperarLS();

// ***EVENTOS DEL SUBMIT ("INICIAR SESION")
inicioSesion.addEventListener('submit', (e) => {
    e.preventDefault();
    ingresarSesion(guardarLS)
    // console.log("estoy aqui");
})


// ***MEJORAR EL FILTRO DE DATOS
// const cantidadUsers = datosUsuarios.map((el) => { return el.id})

// console.log(cantidadUsers);