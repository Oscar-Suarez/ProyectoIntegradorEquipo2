
var nombre= document.querySelector("#nombre");
var numero= document.querySelector("#numero");
var email= document.querySelector("#email");
var comentario = document.querySelector("#comentario");
var error = document.querySelector("#error");
var error2 = document.querySelector("#error2");
var error3 = document.querySelector("#error3");
var error4 = document.querySelector("#error4");
var form= document.querySelector("#form");



form.addEventListener("submit", function(evt) {
    evt.preventDefault();
console.log("Enviando formulario");
var mensajeerror=[] ;

if (nombre.value === null || nombre.value===""){
    mensajeerror.push("Ingresa tu nombre");
    error.innerHTML= mensajeerror.join(",");
}
else if (numero.value === null || numero.value==="" || (!isnumero(numero.value))){
    mensajeerror.push("Ingresa tu número telefónico");
    error2.innerHTML= mensajeerror.join(",");
}
 else if (!isEmail(email.value)){
    mensajeerror.push("Ingresa un email válido");
    error3.innerHTML= mensajeerror.join(",");
}
else if (comentario===null || comentario.value===""){
    mensajeerror.push("Ingresa un comentario");
    error4.innerHTML= mensajeerror.join(",");
}

    
    
});

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
function isnumero(numero) {
    return /^\d{10,10}$/.test(
    numero
    );
  }


/*
var infocontacto 
  {
    "correo": correo.value
    "Nombre": correo.value
    "numero": numero.value
    "cometario": comentario.value
  }



/*
var nombre = document.querySelector("#nombre");
var numero = document.querySelector("#numero");
var email = document.querySelector("#email");
var comentario = document.querySelector("#comentario");
var error = document.querySelector("#error");
var error2 = document.querySelector("#error2");
var error3 = document.querySelector("#error3");
var error4 = document.querySelector("#error4");
var form = document.querySelector("#form");
var parrafo=document.querySelector(".todoserrores");

form.addEventListener("submit", e=>  {
  e.preventDefault()
  let warnings="";
  parrafo.innerHTML="";
  let regexnumero= /^\d{10,10}$/;
  let entrar=false;
  let regexemail=  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(nombre.value.length <3){
   warnings=+ "El nombre no es valido <br>"; 
   entrar=true;
    if (entrar){
      parrafo.innerHTML= warnings;
    } else{
      parrafo.innerHTML="enviado";
  }
  if (!regexemail.test (email.value)){
    warnings+="El email no es valido <br>";
    entrar=true ;
    if(entrar){
      parrafo.innerHTML= warnings;
    }else 
    parrafo.innerHTML="enviado";
  }
  if (!regexnumero.test(numero.value)){
    warnings+="El numero no es valido <br>";
    entrar=true;
  }else{
    parrafo.innerHTML="enviado";
    }
    if(comentario.value===""){
      warnings+="Por favor escribe un comentario";
      entrar=true;
      if ()
    }
  if (entrar){
    parrafo.innerHTML= warnings;
  } else{
    parrafo.innerHTML="enviado";
  }
  
});


*/









/*
form.addEventListener("submit", e=> {
  e.preventDefault();
  checkInputs();
});

function checkInputs(){
  const usernameValue = nombre.value.trim();
  const emailValue= email.value.trim();
  const numeroValue=numero.value.trim();
  const comentarioValue=comentario.value.trim();

  if (usernameValue === ""){
    setErrorFor(nombre, "Por favor escriba su nombre");
  }else{
    setSuccessFor(nombre);
  }
  if (emailValue===""){
    setErrorFor(email, "Poner su Correo electrónico");
  } else if (!isEmail(emailValue)){
    setErrorFor(email, "No es un correo electrónico valido");
  } else {
    setSuccessFor(email);
  }
  if (numeroValue===""){
   setErrorFor(numero, "No es un número valido");
  }else if (!isnumero(numeroValue)){
    setSuccessFor(numero);
  }
  if (comentarioValue===""){
    setErrorFor(comentario, "Escribe un comentario por favor");
  } else {
    setSuccessFor(comentario);
  }
};

function setErrorFor(input,message){
  const formcontrol=input.parentElement;
  const todoserrores1= formcontrol.querySelector("#todoserrores");
  formcontrol.className= "form-control error";
  error.innerText=message;
}

/*
function setErrorFor(input, message){
  const formcontrol= input.parentElement;
  const errores=document.querySelector("#todoserrores");
*/
/*
}
function setSuccessFor(input){
  const formcontrol=input.parentElement;
  formcontrol.className="form-control error";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
function isnumero(numero) {
  return /^\d{10,10}$/.test(
    numero
  );
}
*/
//Declaramos las variables que estarán tomando los valores del input que da el usuario
var nombre= document.querySelector("#nombre");  //Accede al valor nombre
var numero= document.querySelector("#numero"); //Accede al valor numer
var email= document.querySelector("#email");//Accede al valor email
var comentario = document.querySelector("#comentario");//Accede al valor comentario
var error = document.querySelector("#error"); //Accede a la sección en donde se ingresará el error
var error2 = document.querySelector("#error2");//Accede a la sección en donde se ingresará el error
var error3 = document.querySelector("#error3");//Accede a la sección en donde se ingresará el error
var error4 = document.querySelector("#error4");//Accede a la sección en donde se ingresará el error
var form= document.querySelector("#form"); //Accede a toda la estructura del formulario


//Código para evaluar los formularios
form.addEventListener("submit", function(evt) {
    evt.preventDefault(); //PreventDefault es para evitar que el evento ocurra si o si 
console.log("Enviando formulario");
var mensajeerror=[] ; //Variable global que usaremos para los condicionales

if (nombre.value === null || nombre.value===""){ //Código para validar si el campo tiene algun caracter
    mensajeerror.push("Ingresa tu nombre");
    error.innerHTML= mensajeerror.join(",");
}
else if (numero.value === null || numero.value==="" || (!isnumero(numero.value))){ //Código para validar el numero, tiene que ser un numero de 10 digitos
    mensajeerror.push("Ingresa tu número telefónico");
    error2.innerHTML= mensajeerror.join(",");
}
 else if (!isEmail(email.value)){
    mensajeerror.push("Ingresa un email válido");  //Código para evaluar si el email es uno valido
    error3.innerHTML= mensajeerror.join(",");
}
else if (comentario===null || comentario.value===""){ //Código para validar si el cmapo de comentario tiene algún valor
    mensajeerror.push("Ingresa un comentario");
    error4.innerHTML= mensajeerror.join(",");
}

    
    
});
//Expresiones Regulares

function isEmail(email) { //Expresion regular para el correo
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
function isnumero(numero) { //Expresion regular para el teléfono
    return /^\d{10,10}$/.test(
    numero
    );
  }


/*
var infocontacto 
  {
    "correo": correo.value
    "Nombre": correo.value
    "numero": numero.value
    "cometario": comentario.value
  }



/*
var nombre = document.querySelector("#nombre");
var numero = document.querySelector("#numero");
var email = document.querySelector("#email");
var comentario = document.querySelector("#comentario");
var error = document.querySelector("#error");
var error2 = document.querySelector("#error2");
var error3 = document.querySelector("#error3");
var error4 = document.querySelector("#error4");
var form = document.querySelector("#form");
var parrafo=document.querySelector(".todoserrores");

form.addEventListener("submit", e=>  {
  e.preventDefault()
  let warnings="";
  parrafo.innerHTML="";
  let regexnumero= /^\d{10,10}$/;
  let entrar=false;
  let regexemail=  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(nombre.value.length <3){
   warnings=+ "El nombre no es valido <br>"; 
   entrar=true;
    if (entrar){
      parrafo.innerHTML= warnings;
    } else{
      parrafo.innerHTML="enviado";
  }
  if (!regexemail.test (email.value)){
    warnings+="El email no es valido <br>";
    entrar=true ;
    if(entrar){
      parrafo.innerHTML= warnings;
    }else 
    parrafo.innerHTML="enviado";
  }
  if (!regexnumero.test(numero.value)){
    warnings+="El numero no es valido <br>";
    entrar=true;
  }else{
    parrafo.innerHTML="enviado";
    }
    if(comentario.value===""){
      warnings+="Por favor escribe un comentario";
      entrar=true;
      if ()
    }
  if (entrar){
    parrafo.innerHTML= warnings;
  } else{
    parrafo.innerHTML="enviado";
  }
  
});


*/









/*
form.addEventListener("submit", e=> {
  e.preventDefault();
  checkInputs();
});

function checkInputs(){
  const usernameValue = nombre.value.trim();
  const emailValue= email.value.trim();
  const numeroValue=numero.value.trim();
  const comentarioValue=comentario.value.trim();

  if (usernameValue === ""){
    setErrorFor(nombre, "Por favor escriba su nombre");
  }else{
    setSuccessFor(nombre);
  }
  if (emailValue===""){
    setErrorFor(email, "Poner su Correo electrónico");
  } else if (!isEmail(emailValue)){
    setErrorFor(email, "No es un correo electrónico valido");
  } else {
    setSuccessFor(email);
  }
  if (numeroValue===""){
   setErrorFor(numero, "No es un número valido");
  }else if (!isnumero(numeroValue)){
    setSuccessFor(numero);
  }
  if (comentarioValue===""){
    setErrorFor(comentario, "Escribe un comentario por favor");
  } else {
    setSuccessFor(comentario);
  }
};

function setErrorFor(input,message){
  const formcontrol=input.parentElement;
  const todoserrores1= formcontrol.querySelector("#todoserrores");
  formcontrol.className= "form-control error";
  error.innerText=message;
}

/*
function setErrorFor(input, message){
  const formcontrol= input.parentElement;
  const errores=document.querySelector("#todoserrores");
*/
/*
}
function setSuccessFor(input){
  const formcontrol=input.parentElement;
  formcontrol.className="form-control error";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
function isnumero(numero) {
  return /^\d{10,10}$/.test(
    numero
  );
}
*/