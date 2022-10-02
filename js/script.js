class Registro {
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

document.getElementById("enviar").addEventListener("click", guardarRegistro());