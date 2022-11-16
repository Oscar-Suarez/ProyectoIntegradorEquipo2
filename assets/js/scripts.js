function runNavBar(){ //Función para agregar la NavBar a todos los archivos .HTML
    var navBar = document.getElementById("navbar");
    navBar.innerHTML = `
    <nav class="navbar navbar-expand-sm">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">
        <img src="../assets/img/LogoBalxhe.png" alt="" id="logoNavBar">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">B</span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="menu-center">
        <ul class="navbar-nav ">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="products.html">Productos</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="about-us.html">¿Quienes somos?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="FAQ.html">FAQ</a>
          </li>
          
        </ul>
      </div>
      
        <ul class="navbar-nav d-flex" id="menuIcons">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
                <span class="material-symbols-outlined">
                    account_circle
                </span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="shopping-cart.html">
                <span class="material-symbols-outlined">
                    shopping_cart
                </span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
                <span class="material-symbols-outlined">
                    search
                </span>
            </a>
          </li>

          
        </ul>
      
    </div>
  </nav>`;
}

runNavBar(); //Corremos la funcion para que se agregue.