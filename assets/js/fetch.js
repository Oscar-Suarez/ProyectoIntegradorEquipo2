document.getElementById("boton-guardar").addEventListener("click", function(){

let nombreUsuario = document.getElementById("name"); //nombreApellido
let direccionUsuario = document.getElementById("username"); //Usuario
let fechaUsuario = document.getElementById("start");//fecha de nacimiento
let telefonoUsuario = document.getElementById("tel")//Telefono
let emailUsuario = document.getElementById("email"); //correo
let contra1Usuario = document.getElementById("password1"); //contrasenia



console.log(nombreUsuario.value);
console.log(direccionUsuario.value);
console.log(fechaUsuario.value);
console.log(telefonoUsuario.value);
console.log(emailUsuario.value);
console.log(contra1Usuario.value);




const datos = {
    nombreYApellido:nombreUsuario.value, //Nombre y apellido
    nombreUsuario:direccionUsuario.value, //usuario
    fecha:fechaUsuario.value, //fechaNacimiento
    telefono:telefonoUsuario.value, // telefono
    email:emailUsuario.value, //Email
    contra1:contra1Usuario.value //Contrasenia
}

//falta direccion del back end
fetch("http://localhost:8080//api/usuarios/", { //la direccion que creamos en JAVA
method: "POST", //el metodo que voy a utilizar porque estoy enviando informacion al servidor
headers:{
    "Content-Type": "application/json" //Le decimos que el tipo de contenido que usamos es JSON
},
body: JSON.stringify(datos)//El cuerpo de mi solicitud debe cambiarse a string, para que el servidor lo pueda leer
})
.then((response) => response.text()) //Esta es la respuesta que nos da el servidor, es este caso la recibo como un texto. Lo hacemos asi por si en algun momento quiero mostrar ese texto en pantall (innerHTML o textContent).
.then((datos) => { //esta promesa es para poder mostrar si la conexion al servidor fue exitosa
    console.log("Datos del usuario enviados al servidor", datos);
    alert("Registro exitoso"); //Mostramos una alerta a nuestro usuario
})
.catch((error) =>{  //Esta promesa es por si el servidor no responde. En este caso, mostramos un mensaje de error
    console.log("Error al enviar los datos al servidor.", error);
    alert("Algo sucedio con el registro, intenta de nuevo"); //Mostramos un mensaje de alerta en la pagina
});
});
