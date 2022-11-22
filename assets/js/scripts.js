function runNavBar(){ //Función para agregar la NavBar a todos los archivos .HTML
    var navBar = document.getElementById("navbar");
    navbar.classList.toggle("container"); //Agregamos compatibilidad con Bootstrap
    navBar.innerHTML = `
    <div id="menuDesplegable">
            <button id="togglerMenu" onclick="animation(this)">
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
        
        <div id=navbar1>
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
            <a aria-current="page" href="./user-page.html">
                <span class="material-symbols-outlined" id="mobileNavbarIconOut">
                    account_circle
                </span>
            </a>
            <a href="shopping-cart.html" id="shoppingCartContainer">
                <span class="material-symbols-outlined" id="shoppingCartIcon">
                    shopping_cart
                </span>
            </a>
        </div>
        <div id="menuMobile">
            <ul>
                <li>
                    <a href="./index.html">
                        <form>
                            <input type="text" class="searchInput" value=" Buscar Productos" id="inputBuscador"></input>
                            <a class="searchInput" type="submit" value="Submit">
                                <span class="material-symbols-outlined" id="menuMobileIcons">
                                    search
                                </span>
                            </a>
                        </form>
                    </a>
                </li>
                <li><a href="./user-page.html">
                        <span class="material-symbols-outlined"  id="menuMobileIcons">
                            account_circle
                        </span>
                        Account</a></li>
                <li><a href="./index.html">Inicio</a></li>
                <li><a href="./products.html">Productos</a></li>
                <li><a href="./about-us.html">¿Quienes somos?</a> </li>
                <li><a href="./FAQ.html">FAQ</a></li>
        
                <ul>
        </div>
  
  `;

}
var openMenu = false;
function animation(x) {
  x.classList.toggle("change");
  navbar.classList.toggle("change");
    if (!openMenu){
      setTimeout(() => {
      menuMobile.classList.toggle("change");
      }, 500);
      openMenu = !openMenu;
    } else {
      menuMobile.classList.toggle("change");
      openMenu = !openMenu;
    }
}
function  preventRefreshButton () {
  document.getElementById("inputBuscador").addEventListener("click", function(event){
    event.preventDefault()
  });

}


runNavBar(); //Corremos la funcion para que se agregue.
preventRefreshButton();


