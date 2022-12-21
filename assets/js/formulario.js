/*
La función isValid recibe dos parámetros: input y type. El parámetro input es un
elemento del DOM que representa un campo de entrada de texto en un formulario.
El parámetro type es una cadena de texto que especifica el tipo de dato que se 
espera que el usuario ingrese en el campo de entrada.

La función comienza declarando un objeto options, que contiene una propiedad por 
cada tipo de dato que se puede validar. Cada propiedad es una expresión regular 
que se utilizará para verificar si el valor ingresado por el usuario cumple con 
los criterios especificados para el tipo de dato en cuestión.

Luego, la función extrae la expresión regular que corresponde al tipo de dato 
especificado en el parámetro type, y la asigna a una variable local regex.

Posteriormente, la función verifica si el valor ingresado por el usuario en el 
campo de entrada cumple con los criterios especificados en la expresión regular regex.
 Si el valor no cumple con estos criterios, se agrega la clase "wrongInput" 
 al campo de entrada y la función devuelve false. Si el valor cumple con los criterios,
  se elimina la clase "wrongInput" del campo de entrada y la función devuelve true.
*/

function isValid(input, type) {
	const options = {
		"names": /^[A-Z][a-z]*(\s[A-Z][a-z]*)?$/,
		"fullName": /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]+(?: [a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]+)*$/,
		"email": /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		"password": /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
		"username": /^[a-zA-Z]+[a-zA-Z0-9]{5,}$/,
		"phone": /^\d{10}$/
	}
	const regex = options[type];

	if (!regex.test(input.value)){
		input.classList.add("wrongInput");
		return false;
	} else {
		input.classList.remove("wrongInput");
		return true;
	}
}

const formSignUp = document.querySelector("form#UserData");
if (formSignUp != null){
	formSignUp.addEventListener("submit", function (evt) {
	evt.preventDefault();

	const name = document.querySelector("#name");
	isValid(name, "names");

	const lastName = document.querySelector("#lastName");
	isValid(lastName, "names");

	const userName = document.querySelector("#username");
	isValid(userName, "username");

	const eMail = document.querySelector("#email");
	isValid(eMail, "email");

	const password1 = document.querySelector("#password1");
	isValid(password1, "password");
	
	const password2 = document.querySelector("#password2");
	isValid(password2, "password");


	if (password1.value != password2.value){
		password1.classList.add("wrongInput");
		password2.classList.add("wrongInput");
	} 
});
}


const formLogIn = document.querySelector("form#loginForm");
if(formLogIn != null){
	formLogIn.addEventListener("submit", function (evt) {
		evt.preventDefault();
	
		const username = document.querySelector("#username");
		isValid(username, "username");
	
		const password = document.querySelector("#password");
		isValid(password, "password");
	
	});
}

const forgotPassword = document.querySelector("form#forgotP");
if(forgotPassword != null){
	forgotPassword.addEventListener("submit", function (evt) {
		evt.preventDefault();
	
		const mail = document.querySelector("#correo");
		if(isValid(mail, "email")){
			alert("Se ha enviado un correo para recuperar su contraseña")
		}else alert("Favor de ingresar un correo válido")
	});
}

const formContactUs = document.querySelector("form#contactUs");
if(formContactUs != null){
	formContactUs.addEventListener("submit", (event) =>{
		event.preventDefault();

		const fullName = document.querySelector("#name");
		isValid(fullName, "fullName");

		const eMail = document.querySelector("#email");
		isValid(eMail, "email");


		const phone = document.querySelector("#phone");
		isValid(phone, "phone");

		const coment = document.querySelector("#coment");

	})
}