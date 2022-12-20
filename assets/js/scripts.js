//Funciones 

/*
Esta función cambia el tema de un sitio web entre modo claro y oscuro. 
Para ello, se define un objeto que contiene las variables CSS que se 
utilizarán para cambiar el tema de la página. Luego, se selecciona el 
elemento :root del documento HTML, que es el elemento raíz del árbol DOM 
y que se utiliza para definir variables CSS globales. A continuación, 
se establece el valor del tema a utilizar en la variable theme, que se 
obtiene a partir de la variable mode (si mode es verdadero, 
    se utiliza el tema oscuro, si es falso, se utiliza el tema claro).

Luego, se itera sobre el objeto globalColors[theme], que contiene las 
variables CSS del tema seleccionado, y se establecen sus valores en el 
elemento :root. Por último, se guarda el estado del tema (modo claro o oscuro) 
en una cookie para que pueda ser recuperado en futuras visitas a la página.
*/
function darkMode(mode) { //Función para cambiar el tema del sitio Web
    const globalColors = {
        light: {
        '--color1': '58,13,21',
        '--color2': '97, 10, 27',
        '--color3': '156, 13, 2',
        '--color4': '221, 123, 44',
        '--color5': '240, 185, 78',
        '--color6': '245, 235, 202',
        '--colorBG':'226, 221, 206',
        '--font-color': 'black',
        '--shadow-before': '0px 0px 5px 2px rgba(0, 0, 0, 0.25)',
        '--shadow-after': '0px 0px 10px 3px rgba(0, 0, 0, 0.5)'
        },

        dark: {
        '--color2': '58,13,21',
        '--color3': '97, 10, 27',
        '--color4': '194, 13, 0',
        '--color5': '221, 123, 44',
        '--color6': '240, 185, 78',
        '--color1': '35, 35, 35',
        '--colorBG':'60, 60, 60',
        '--font-color': 'white',
        '--shadow-before': '0px 0px 5px 1px rgba(0, 0, 0, 0.5)',
        '--shadow-after': '0px 0px 10px 1px rgba(0, 0, 0, 1)'

        }
    };                         // Objeto que contiene las variables de :root

    let root = document.querySelector(":root"); //Obtenemos el elemento :root
    let theme = mode ? "dark" : "light"; 
       //Si la variable mode es true --> theme = dark, false --> theme = light

    for (const [key, value] of Object.entries(globalColors[theme])){ // Definimos un ciclo for para iterar sobre el objeto                                                   // globalColors[theme]
        root.style.setProperty(key, value); //Cambiamos las propiedades en :root contenidas en globalColors[theme].
    }


    document.cookie = "statusDarkMode = " + mode + ";path=/"; //Guardamos el estado del DarkMode en una cookie.

}

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


function animation() { //Función para anadir y quitar clases a ciertor elementos. Permite animarlos con CSS
    togglerMenu.classList.toggle("change"); //Se agrega la clase .change para animar con CSS el boton del menu desplegable 
    navbar.classList.toggle("change"); //Se agrega la clase .change para animar con CSS el despliegue de la NavBar

    if (openMenu) { //Si el menu esta abierto (true) 
        menuDesplegable.classList.toggle("change"); //Quita la clase .change para que cambie la NavBar
        openMenu = !openMenu; //Cambie el estado de la variable a su contrario (true) --> (false)
    } else { //Lo contrario
        setTimeout(() => {
            menuDesplegable.classList.toggle("change"); //Agrega la clase .change para que cambie la NavBar
        }, 300); //Usamos SetTimeOut definir un tiempo de espera y que aparezca la NavBar Desplegada.
        openMenu = !openMenu; //Cambie el estado de la variable a su contrario (false) --> (true)
    }
}

function preventRefreshButton() {
    document.getElementById("inputBuscador").addEventListener("click", function (event) {
        event.preventDefault() //Prevenir que al dar click se refresque automaticamente la pagina
    });

}

function runNavBar(element){ //Función para agregar la NavBar a todos los archivos .HTML
    const code = `  
    <div id="botonMenuDesplegable">
            <button id="togglerMenu">
                <div class="animatedButton">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </button>
        </div>
        
        <div id=logo>
            <a href="./index.html">
                <img src="./assets/img/logo_banner-bigger.png" alt="" id="logoNavBar">
                <img src="./assets/img/LogoBalxhe.png" alt="" id="logoMobileNavBar">
        
            </a>
        </div>
        
        <div id=menuText>
            <nav>
               <a href="./index.html">Inicio</a>
                <a href="./products.html">Productos</a>
                <a href="./about-us.html">¿Quiénes somos?</a>
                 <!--<a href="./FAQ.html">FAQ</a>-->
            </nav>
        </div>
        
        <div id="menuIcons">
            <a data-bs-toggle="dropdown" role="button" aria-expanded="false">
                <span class="material-symbols-outlined" id="mobileNavbarIconOut">
                    search
                </span>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" id="search">
                <li>
                    <form class="dropdown-item">
                        <input class="form-placeholders" type="text" placeholder="Buscar Productos..." name="search">
                        <button class="btn btn-success " type="submit">Enviar</button>
                    </form>
                </li>
            </ul>


            <a data-bs-toggle="dropdown" role="button" aria-expanded="false" id="myAccountIcon">
                <span class="material-symbols-outlined" id="mobileNavbarIconOut">
                    account_circle
                </span>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
                    <li>
                        <a class="dropdown-item" href="./signup.html">
                        <span class="material-symbols-outlined">
                            person_add
                        </span>
                        Crear Cuenta
                        </a>
                    </li>


                    <li>
                        <a class="dropdown-item" href="./login.html">
                        <span class="material-symbols-outlined">
                            login
                        </span>
                        Iniciar Sesión
                        </a>
                    </li>      
            </ul>

            

        
            <a href="shopping-cart.html" id="shoppingCartContainer">
                <span class="material-symbols-outlined" id="shoppingCartIcon">
                    shopping_cart
                </span>
            </a>
        </div>
        <div class="container-fluid mt-4 p-3" id="menuDesplegable">
            <ul>
                <li>
                    <a href="./index.html">
                        <form>
                            <input type="text" class="searchInput" value=" Buscar Productos" id="inputBuscador"></input>
                            <a class="searchInput" type="submit" value="Submit">
                                <span class="material-symbols-outlined" id="menuDesplegableIcons">
                                    search
                                </span>
                            </a>
                        </form>
                    </a>
                </li>
                <li><a href="./user-page.html" class="beforeLogIn">
                        <span class="material-symbols-outlined"  id="menuDesplegableIcons">
                            account_circle
                        </span>
                        Account</a>
                </li>
                <li><a href="./user-page.html" class="beforeLogIn">
                    <span class="material-symbols-outlined">
                        package
                    </span>
                        Mis Pedidos</a>
                </li>
                <li class="afterLogInRemove">
                    <a href="./signup.html">
                    <span class="material-symbols-outlined">
                        person_add
                    </span>
                    Registrarse
                    </a>
                </li>



                <li class="afterLogInRemove">
                    <a href="./login.html">
                    <span class="material-symbols-outlined">
                        login
                    </span>
                    Iniciar Sesión
                    </a>
                </li>     
                
                <li id="modo-oscuro" class="beforeLogIn">
                    <h>Modo Oscuro</h>
                        <button id="button-container">
                            <div id="button-slider">
                            
                            </div>
                        </button>
                </li>   
                    <li id="CloseButton" class="beforeLogIn">
                        <span class="material-symbols-outlined">
                        logout
                        </span>
                        <h>Cerrar Sesión</h>
                            
                    </li>
            
            </ul>
            <hr>
            <ul>
                <li><a href="./index.html">Inicio</a></li>
                <li><a href="./products.html">Productos</a></li>
                <li><a href="./about-us.html">¿Quienes somos?</a> </li>
          
            </ul>
            <hr>
        </div>
  
  `; //Variable que almacena el codigo HTML de la Barra de Navegación
    element.innerHTML = code; //Insertamos el codigo en el HTML

}

function runLateralBar(element) { //Función para agregar la LateralBar 
    const code = `
    <ul>
    <a href="./user-page.html">
        <li>
            <span class="material-symbols-outlined">
                account_circle
            </span>
            <h>Mi Cuenta</h>
            
        </li>
    </a>
    <!--<a href="#">
        <li>
            <span class="material-symbols-outlined">
                history
            </span>
            <h>Historial</h>
        </li>
    </a>-->
    <a href="./my-orders.html">
        <li>
            <span class="material-symbols-outlined">
                package
            </span>
            <h>Mis Pedidos</h>
        </li>
    </a>
    <!--<a href="#">
        <li>
            <span class="material-symbols-outlined">
                star
            </span>
            <h>Lista de Deseos</h>
        </li>
    </a>-->

    <a>
        <li id="modo-oscuro">
            <h>Modo Oscuro</h>
                <button id="button-container">
                    <div id="button-slider">
                    
                    </div>
                </button>
        </li>   
    </a>

    <a href="./index.html" id="CloseSesion" >
        <li id="CloseButton" >
            <span class="material-symbols-outlined">
            logout
            </span>
            <h>Cerrar Sesión</h>
                
        </li>
    </a>

</ul>
`;  //Variable que contiene el codigo de la Barra de Navegacion Lateral para Paginas Privadas

    if (element != null) { //Verificamos que el elemento existá en el HTML
        element.innerHTML = code; //Si existe, se inserta el codigo.
    }
}

function runFooter(element2) { //Función para agregar el footer a todos los archivos .HTML
    let code2 = ` <footer class="text-center text-white">
    <!-- Grid container -->
    <div class="container">
      <!-- Section: Links -->
      <section class="mt-2 mb-5">
        <!-- Grid row-->
        <div class="row text-center d-flex justify-content-center pt-5">
          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="./about-us.html" class="text-white">Sobre Nosotros</a>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="./products.html" class="text-white">Productos</a>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="./FAQ.html" class="text-white">Preguntas Frecuentes</a>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="./terms-conditions.html" class="text-white">Términos y Condiciones</a>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="./about-us.html#contactanos" class="text-white">Contáctanos</a>
            </h6>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row-->
      </section>
      <!-- Section: Links -->

      <hr class="my-3" />

      <div class="h5 mb-3">Redes Sociales de Balxhe</div>
      <!-- Section: Social -->
      <section class="text-center pb-4">
        <a href="https://www.instagram.com/balxhemx/" class="text-white me-4">
          <img src="./assets/img/Instagram_icon.webp" width="40px">
        </a>
        <a href="https://www.facebook.com/profile.php?id=100088209083328" class="text-white me-4">
          <img src="./assets/img/facebook_icon.png" width="40px">
        </a>

      </section>
      <!-- Section: Social -->
    </div>
    <!-- Grid container -->


  </footer>
            
      `; //Variable que almacena el codigo HTML del footer
    element2.innerHTML = code2; //Insertamos el codigo en el HTML

}

function ageChecker (mode) {

    if (!mode){ //Si modo es false --> se convierte en true y se ejecuta el codigo del IF

        const code = `<div class="fixed-bottom" id="alerta18">
        <div>
          <h1>¿ERES MAYOR DE EDAD?</h1>
          <hr>
          <p>
            Para ingresar a este sitio debes confirmar que tienes +18 años.
          </p>
          <p>
            Al confirmar ser mayor de edad manifiestas tu conformidad con nuestros Términos y condiciones y nuestro Aviso de
            Privacidad.
          </p>
          <button class="btn btn-success" id="ocutarDiv">Si</button>
    
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style="text-decoration: none;">
            <button class="btn btn-danger">NO</button>
          </a>
    
        </div>
      </div>`; //Guardamos el codigo del aviso en una variable

        document.body.innerHTML += code; //añadimos el codigo al body

        const botonAceptar = document.getElementById('ocutarDiv'); 
        const aviso=document.getElementById('alerta18');//Jalamos los elementos que vamos a modificar

        botonAceptar.addEventListener('click', ()=>{
            aviso.classList.add('activo');
            document.cookie = "isAdult = true;"; //guia
        });
    }
}

//Ejecución

//0-. Definir la cookie.
if (!document.cookie) { //Si la cookie no existe
    document.cookie = "statusDarkMode = false;";
    document.cookie = "isAdult = false;";  
    document.cookie = "ActiveSesion = true;" 
}

console.log()
// 1-. Leemos la Cookie
let statusDarkMode = getCookie("statusDarkMode") == "true" ? true : false; //Obtenemos el valor de la cookie en booleano.
darkMode(statusDarkMode);  //Aplicamos el tema de acuerdo al valor en la cookie
let isAdult = getCookie("isAdult") == "true" ? true : false; //Obtenemos el valor de la cookie en booleano.
ageChecker(isAdult);
let activeSesion = getCookie("ActiveSesion") == "true" ? true : false;

// 2-. Corremos la NavBar
const navBar = document.getElementById("navbar");   // Obtenemos el contenedor de la NavBar
runNavBar(navBar);                                  // Corremos la funcion para que se agregue.
preventRefreshButton();                             // Previene que se refresque la pagina al hacer click en el buscador de la NavBar
var openMenu = false;                                       // La NavBar Colapsable esta cerrada


//2.5-. Para obtener estos elementos primero se debe agregar la NavBar, ya que estan contenidos en ella.
var togglerMenu = document.getElementById("togglerMenu");   // Obtenemos el botton de la NavBar Colapsable
togglerMenu.addEventListener("click", animation);           // En caso de click, se corre la funcion animation 


// 3-. Verificamos si la sesion esta activa
if (activeSesion){
    const myAccountIcon = document.querySelector("#myAccountIcon");
    myAccountIcon.removeAttribute("data-bs-toggle");
    myAccountIcon.removeAttribute("role");
    myAccountIcon.removeAttribute("aria-expanded");
    myAccountIcon.setAttribute("href", "./user-page.html");
    const FromMobileNav = document.querySelectorAll(".afterLogInRemove");
    for (let element of FromMobileNav){
        element.remove();
    }

} else {
    const shopping_cart = document.querySelector("#shoppingCartContainer");
    shopping_cart.setAttribute("href", "./login.html")

    const FromMobileNav = document.querySelectorAll(".beforeLogIn");
    for (let element of FromMobileNav){
        element.remove();
    }

}




// 4-. Corremos la LateralBar
var lateralBar = document.getElementById("LateralBar");     // Obtenemos el contenedor de la LateralBar
runLateralBar(lateralBar);                                  // Corremos la funcion para que se agregue.

    //4.5-. Boton de Modo Oscuro
    let buttonDarkMode = document.querySelectorAll("#button-container"); // Obtenemos el boton del HTML
    if (buttonDarkMode[0] != null) {   // Verificamos que exista.
        
        if (statusDarkMode){    // Si el Modo Oscuro está activado (statusDarkMode == true)
            buttonDarkMode[0].classList.add("on-dark-mode"); //Definimos el estado del boton.
            if (buttonDarkMode[1] != null){
                buttonDarkMode[1].classList.add("on-dark-mode");
            }
        }

        
    buttonDarkMode[0].addEventListener("click", () => {        // Cuando demos click en el boton
        buttonDarkMode[0].classList.toggle("on-dark-mode");    // Quitamos o Agregamos la clase para cambiar el estado del boton.
        statusDarkMode = !statusDarkMode;                   // Modificamos el estado del Modo Oscuro.
        darkMode(statusDarkMode);                           // Invocamos la funcion que cambiará el tema de la pagina 
    });

    if (buttonDarkMode[1] != null) {
        buttonDarkMode[1].addEventListener("click", () => {        // Cuando demos click en el boton
            buttonDarkMode[1].classList.toggle("on-dark-mode");    // Quitamos o Agregamos la clase para cambiar el estado del boton.
            statusDarkMode = !statusDarkMode;                   // Modificamos el estado del Modo Oscuro.
            darkMode(statusDarkMode);                           // Invocamos la funcion que cambiará el tema de la pagina 
        });
    }
}



//5-. SCRIPT PARA FOOTER


const footer = document.getElementById("footer"); // Obtenemos el contenedor del footer
if (footer != null) {   //verificamos que el elemento exista en la pagina HTML
    runFooter(footer);  // Corremos la funcion para que se agregue.                                
}


//6-. Cerrar sesion.
const closeSesion = document.querySelector("#CloseSesion");
    if(closeSesion != null){
    closeSesion.addEventListener("click", () => {
        document.cookie = "statusDarkMode = false;";
        document.cookie = "isAdult = false;";
        document.cookie = "ActiveSesion = false;";
    })
}


//Carrusel
let items = document.querySelectorAll('#carouselMultiple .carousel-item')

if (items != null){
    items.forEach((el) => {
    
    var slides = items.length;
    let next = el.nextElementSibling;
    for (var i = 1; i < slides; i++) {
        if (!next) {
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

document.querySelector('#carouselMultiple').onresize = (event) => {
    if(screen.width < 576){
        console.log("yes");
    }
};

}



