
let code = `
        <div class="card mb-3">
            <div class="row">
                <div class="col-sm-3 center">
                    <img src="./assets/img/bottleBalxhe.png" class="img-fluid rounded-start">
                </div>

                <div class="col-sm-9 p-">
                    <div class="card-body">
                        <h5 class="card-title">XX Lager</h5>
                        <p class="card-text">La cerveza más mamadora lista para ser entregada
                            tan fria como el corazon del que se fue por cigarros.
                        </p>
                        <p class="card-text">Precio:<span class="mx-1" id="precio">25</span><b>MXN.</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
`;

let orderContainer = document.querySelector("div.orderContainer");

for (let i=1; i <= 10; i++) {
    orderContainer.innerHTML += code;
}


var codeIDK = `
<div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
    
                                    <!--BOTÓN DE USUARIO-->
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapseOne" id="">
                                        USUARIO
                                    </button>
                                </h2>
    
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                                    aria-labelledby="panelsStayOpen-headingOne">
    
                                    <ul class="list-group list-group-flush" id="UserList">
    
                                        <!--EMAIL CONTENEDOR-->
                                        <li class="list-group-item">
                                            Correo electrónico:<span id="email">montero@walle.mx</span>
                                        </li>
    
                                        <!--USERNAME CONTENEDOR-->
                                        <li class="list-group-item">
                                            Nombre de usuario:<span id="username">WalleMontero97</span>
                                        </li>
    
                                    </ul>
                                </div>
                            </div>`;
