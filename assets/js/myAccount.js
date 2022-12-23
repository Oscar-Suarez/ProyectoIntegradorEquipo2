<<<<<<< HEAD
function getCookie(cname) { 
    // Añade el nombre de la cookie a la cadena de búsqueda
    let name = cname + "=";

    // Decodifica la cadena de cookies
    let decodedCookie = decodeURIComponent(document.cookie); 

    // Divide la cadena en una matriz de cookies individuales
    let ca = decodedCookie.split(';'); 

    // Recorre la matriz de cookies
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];

        // Quita los espacios en blanco al principio de la cookie
        while (c.charAt(0) == ' ') { 
            c = c.substring(1);      
        }

        // Si se encuentra la cookie, se devuelve su valor
        if (c.indexOf(name) == 0) { 
            return c.substring(name.length, c.length); 
        }
    }

    // Si no se encuentra la cookie, se devuelve null
    return null;
}


let info = JSON.parse(getCookie("Data_User"));
console.log(info)


const email = info["correo"].split("@");
const birthday = info["fechaNacimiento"].toString();
const date = [  birthday.slice(0, 4),
                birthday.slice(4, 6),
                birthday.slice(6, 8)]

const currentTime = new Date();

let day = currentTime.getDate();
let month = currentTime.getMonth() + 1;
let year = currentTime.getFullYear();

console.log(year, month, day, date)


console.log(date)
document.querySelector("h4#UserName").innerHTML = info["nombreYApellido"]
document.querySelector("div#e-Mail-1").innerHTML = email[0]
document.querySelector("div#e-Mail-2").innerHTML = "@" + email[1]
document.querySelector("input#username").value = info["nombreUsuario"]
document.querySelector("input#Nombre").value = info["nombreYApellido"]
document.querySelector("input#birthday").value = date.join("-")
document.querySelector("input#correo").value = info["correo"]
document.querySelector("input#phone").value = info["telefono"]
=======
var order = `<div class="row m-1 mb-3" id="Order">
<div class="col-6" id="OrderDate">01 de Enero, 2023</div>
<div class="col-6" id="TotalPrice">Total:<span id="TotalPrice">255 MXN</span></div>

<div id="OrderList">
    <div class="Product">
        <div class="Image">
            <img src="./assets/img/bottleBalxhe.png">
        </div>

        <div class="Tittle h6">
            ${"XX Lager"}
        </div>
        <div class="BuyAgain">
            <button class="btn btn-primary">
                Agregar al Carrito
            </button>
        </div>
        <div class="Info">
            Se trata de una bebida tipo pale lager, que produce muy poca y blanca espuma. En 1897 en Orizaba, Veracruz, para conmemorar la llegada del Siglo XX
        </div>
        <div class="Price">Precio:<span>30 MXN</span></div>
    </div>
    <div class="Product">
        <div class="Image">
            <img src="./assets/img/bottleBalxhe.png">
        </div>

        <div class="Tittle h6">
            ${"XX Light"}
        </div>
        <div class="BuyAgain">
            <button class="btn btn-primary">
                Agregar al Carrito
            </button>
        </div>
        <div class="Info">
            Se trata de una bebida para gente que no aguanta la cheve.
        </div>
        <div class="Price">Precio:<span>30 MXN</span></div>
    </div>
</div>
</div>`;

var myOrders = document.getElementById("MyOrders");

for (let i=1; i<=4; i++) {
    myOrders.innerHTML += order;
}

>>>>>>> 4fdf0cd6f9fcb5abf3f0368876ced05aceabd2f9
