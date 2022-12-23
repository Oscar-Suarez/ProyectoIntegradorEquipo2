var email= document.querySelector("#correo");
var contraseña= document.querySelector("#contraseña");
var form=document.querySelector("#form");
var error=document.querySelector("#error");
var error2=document.querySelector("#error2");
 
form.addEventListener("submit", function(evt) {
    evt.preventDefault();
console.log("Enviando formulario");
let mensajeerror=[] ;
if (!isEmail(email.value)){
    mensajeerror.push("Ingresa un correo válido");
    error.innerHTML= mensajeerror.join(",");
}else if (contraseña.value==="" || contraseña.value===null){
    mensajeerror.push("Ingresa tu contraseña");
    error2.innerHTML= mensajeerror.join(",");
}});
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }