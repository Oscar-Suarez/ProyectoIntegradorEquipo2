//Funciones 
function darkMode(mode) { //Función para cambiar el tema del sitio Web
    const globalColors = {
        light: {
        '--color1': 'rgb(58,13,21)',
        '--color2': 'rgb(97, 10, 27)',
        '--color3': 'rgb(156, 13, 2)',
        '--color4': 'rgb(221, 123, 44)',
        '--color5': 'rgb(240, 185, 78)',
        '--color6': 'rgb(245, 235, 202)',
        '--colorBG':'rgb(226, 221, 206)',

        '--shadow-before': '0px 0px 5px 1px rgba(0, 0, 0, 0.1)',
        '--shadow-after': '0px 0px 10px 1px rgba(0, 0, 0, 0.25)'
        },   
        dark: {
        '--color2': 'rgb(58,13,21)',
        '--color3': 'rgb(97, 10, 27)',
        '--color4': 'rgb(194, 13, 0)',
        '--color5': 'rgb(221, 123, 44)',
        '--color6': 'rgb(240, 185, 78)',
        '--color1': 'rgb(35, 35, 35)',
        '--colorBG':'rgb(60, 60, 60)',

        '--shadow-before': '0px 0px 5px 1px rgba(0, 0, 0, 0.5)',
        '--shadow-after': '0px 0px 10px 1px rgba(0, 0, 0, 1)'

    }};                         // Objeto que contiene las variables de :root

    let root = document.querySelector(":root"); //Obtenemos el elemento :root
    let theme = mode ? "dark" : "light";    //Si la variable mode es true --> dark, false --> light
    for (const [key, value] of Object.entries(globalColors[theme])){ // Definimos un ciclo for para iterar sobre el objeto
                                                                     // globalColors[theme]
        root.style.setProperty(key, value); //Cambiamos las propiedades en :root contenidas en globalColors[theme].
    }
    document.cookie = "statusDarkMode = " + mode + ";path=/"; //Guardamos el estado del DarkMode en una cookie.

}

function getCookie(cname) { //Funcion para obtener el valor de un parametro (cname) dentro de la cookie
    let name = cname + "="; 
    let decodedCookie = decodeURIComponent(document.cookie); //obtenemos la Cookie
    let ca = decodedCookie.split(';'); //La separamos cada "punto y coma"
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == '') { // mientras el primer caracter este vacio
            c = c.substring(1);       // tomamos el resto de la cadena de texto 
        }

        if (c.indexOf(name) == 0) { // comprobamos si ya llegamos a la posicion donde se encuentra el parametro que buscamos en la cookie.
            return c.substring(name.length, c.length); //Retornamos el valor del paremetro que buscamos como string
        }
        return null;
    }
}

function runNavBar(element){ //Función para agregar la NavBar a todos los archivos .HTML
    let code = `  
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
                <a href="./about-us.html">¿Quienes somos?</a>
                <a href="./FAQ.html">FAQ</a>
            </nav>
        </div>
        
        <div id="menuIcons">
            <a href="#">
                <span class="material-symbols-outlined" id="mobileNavbarIconOut">
                    search
                </span>
            </a>
            <a data-bs-toggle="dropdown" role="button" aria-expanded="false">
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
                        Sign Up
                        </a>
                    </li>


                    <li>
                        <a class="dropdown-item" href="./login.html">
                        <span class="material-symbols-outlined">
                            login
                        </span>
                        Log in
                        </a>
                    </li>      


            </ul>
            

        
            <a href="shopping-cart.html" id="shoppingCartContainer">
                <span class="material-symbols-outlined" id="shoppingCartIcon">
                    shopping_cart
                </span>
            </a>
        </div>
        <div class="container" id="menuDesplegable">
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
                <li><a href="./user-page.html">
                        <span class="material-symbols-outlined"  id="menuDesplegableIcons">
                            account_circle
                        </span>
                        Account</a></li>
                <li><a href="./index.html">Inicio</a></li>
                <li><a href="./products.html">Productos</a></li>
                <li><a href="./about-us.html">¿Quienes somos?</a> </li>
                <li><a href="./FAQ.html">FAQ</a></li>
        
                <ul>
        </div>
  
  `; //Variable que almacena el codigo HTML de la Barra de Navegación
    element.innerHTML = code; //Insertamos el codigo en el HTML

}

function animation() { //Función para anadir y quitar clases a ciertor elementos. Permite animarlos con CSS
  togglerMenu.classList.toggle("change"); //Se agrega la clase .change para animar con CSS el boton del menu desplegable 
  navbar.classList.toggle("change"); //Se agrega la clase .change para animar con CSS el despliegue de la NavBar

    if (openMenu){ //Si el menu esta abierto (true) 
        menuDesplegable.classList.toggle("change"); //Quita la clase .change para que cambie la NavBar
        openMenu = !openMenu; //Cambie el estado de la variable a su contrario (true) --> (false)
    } else { //Lo contrario
        setTimeout(() => { 
            menuDesplegable.classList.toggle("change"); //Agrega la clase .change para que cambie la NavBar
            }, 300); //Usamos SetTimeOut definir un tiempo de espera y que aparezca la NavBar Desplegada.
            openMenu = !openMenu; //Cambie el estado de la variable a su contrario (false) --> (true)
    }
}

function preventRefreshButton () {
  document.getElementById("inputBuscador").addEventListener("click", function(event){
    event.preventDefault() //Prevenir que al dar click se refresque automaticamente la pagina
  });

}

function runLateralBar(element) { //Función para agregar la LateralBar 
    let code = `
    <ul>
    <a href="./user-page.html">
        <li>
            <span class="material-symbols-outlined">
                account_circle
            </span>
            <h>Mi Cuenta</h>
            
        </li>
    </a>
    <a href="#">
        <li>
            <span class="material-symbols-outlined">
                history
            </span>
            <h>Historial</h>
        </li>
    </a>
    <a href="./my-orders.html">
        <li>
            <span class="material-symbols-outlined">
                package
            </span>
            <h>Mis Pedidos</h>
        </li>
    </a>
    <a href="#">
        <li>
            <span class="material-symbols-outlined">
                star
            </span>
            <h>Lista de Deseos</h>
        </li>
    </a>

    <a>
        <li id="modo-oscuro">
            <h>Modo Oscuro</h>
                <button id="button-container">
                    <div id="button-slider">
                    
                    </div>
                </button>
        </li>   
    </a>

    <a href="https://walle.mx" id="CloseSesion" >
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



//Ejecución

    //0-. Definir la cookie.
    if(!document.cookie) { //Si la cookie no existe
        document.cookie = "statusDarkMode = false;" //La creamos
                        + "path=/";
    }

    // 1-. Leemos la Cookie
    let statusDarkMode = getCookie("statusDarkMode") == "true" ? true : false; //Obtenemos el valor de la cookie en booleano.
    darkMode(statusDarkMode);   // Aplicamos el tema de acuerdo al valor en la cookie

    // 2-. Corremos la NavBar
    const navBar = document.getElementById("navbar");   // Obtenemos el contenedor de la NavBar
    runNavBar(navBar);                                  // Corremos la funcion para que se agregue.
    preventRefreshButton();                             // Previene que se refresque la pagina al hacer click en el buscador de la NavBar
    var openMenu = false;                                       // La NavBar Colapsable esta cerrada 

    //2.5-. Para obetner estos elementos primero se debe agregar la NavBar, ya que estan contenidos en ella.
    var togglerMenu = document.getElementById("togglerMenu");   // Obtenemos el botton de la NavBar Colapsable
    togglerMenu.addEventListener("click", animation);           // En caso de click, se corre la funcion animation 


    // 3-. Corremos la LateralBar 
    var lateralBar = document.getElementById("LateralBar");     // Obtenemos el contenedor de la LateralBar
    runLateralBar(lateralBar);                                  // Corremos la funcion para que se agregue.

    //3.5-. Boton de Modo Oscuro
    let buttonDarkMode = document.querySelector("#button-container"); // Obtenemos el boton del HTML
    if (buttonDarkMode != null) {   // Verificamos que exista.
        
        if (statusDarkMode){    // Si el Modo Oscuro está activado (statusDarkMode == true)
            buttonDarkMode.classList.add("on-dark-mode"); //Definimos el estado del boton.
        }

        buttonDarkMode.addEventListener("click", () => {        // Cuando demos click en el boton
            buttonDarkMode.classList.toggle("on-dark-mode");    // Quitamos o Agregamos la clase para cambiar el estado del boton.
            statusDarkMode = !statusDarkMode;                   // Modificamos el estado del Modo Oscuro.
            darkMode(statusDarkMode);                           // Invocamos la funcion que cambiará el tema de la pagina 
    });

    }










