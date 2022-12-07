var nombre = document.querySelector("#Nombre");
var apellido = document.querySelector("#Apellido");
var nacimiento = document.querySelector("#start");
var email = document.querySelector("#correo");
var contraseña = document.querySelector("#contraseña");
var repecontraseña = document.querySelector("#confirmar-contraseña");
var error = document.querySelector("#error");
var error2 = document.querySelector("#error2");
var error3 = document.querySelector("#error3");
var error4 = document.querySelector("#error4");
var error5= document.querySelector("#error5");
var error6=document.querySelector("#error6");
var error7=document.querySelector("#error7");
var form= document.querySelector("#UserData");

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    console.log("Enviando formulario");
    var mensajeerror = [];

    if (nombre.value === null || nombre.value === "") {
        mensajeerror.push("Ingresa tu nombre");
        error.innerHTML = mensajeerror.join(",");//revisar esto
    } else if (apellido.value === null || apellido.value === "") {
        mensajeerror.push("Ingresa tu apellido");
        error2.innerHTML = mensajeerror.join(",");//revisar esto
    } else if (nacimiento.value === null || nacimiento.value === "") {
        mensajeerror.push("Ingresa tu fecha de nacimiento");
        error3.innerHTML = mensajeerror.join(",");//revisar esto
    } else if ((!isEmail(email.value))) {
        mensajeerror.push("Ingresa un email válido");
        error4.innerHTML = mensajeerror.join(",");
    } else if (contraseña.value === null || contraseña.value === "") {
        mensajeerror.push("Ingresa tu contraseña");
        error5.innerHTML = mensajeerror.join(",");//revisar esto
    } else if (repecontraseña.value !== contraseña.value) {
        mensajeerror.push("Las contraseñas no coinciden");
        error6.innerHTML = mensajeerror.join(",");//revisar esto
       /* if (repecontraseña.value === "") {
            mensajeerror.push("Ingrese una contraseña");
            error6.innerHTML = mensajeerror.join(",");//revisar esto
        }*/
    } else {
        mensajeerror.push("Enviado");
        error7.innerHTML = mensajeerror.join(",");//revisar esto
    }

});

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
