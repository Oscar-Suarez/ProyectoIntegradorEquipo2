
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