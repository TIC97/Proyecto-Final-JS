// *** TRAER DATOS DE MI LOCAL STORAGE PARA LOGIN !!!
// /* const guardarArray = () => {
//     JSON.parse(localStorage.getItem(datosUsuarios)) || [];
// };
// guardarArray(); */

const emailLogin = document.getElementById('email'),
    passLogin = document.getElementById('password'), 
    inicioSecion = document.getElementById('login');


function ingresarSesion(usuarios) {
    let userFound = datosUsuarios.find((usuario)=> {
        return usuario.email === emailLogin.value && usuario.password === passLogin.value
    })
    if (userFound){
        //REDIRIGIR A MI PAGE DE INICIO
        window.location.href="./index.html"
    }else{
        // sweetalert ("usuario no encontrado")
        Swal.fire({
            icon: 'error',
            title: 'Usuario NO encontradp',
            text: 'ingrese el usario correcto',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    return userFound;
};


// *** PONER ALERT PARA DECIR USUARIO INCORRECTO !! 