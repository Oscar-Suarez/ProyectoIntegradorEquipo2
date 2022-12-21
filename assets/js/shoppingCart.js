
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
                            tan fría como el corazon del que se fue por cigarros.
                        </p>
                        <div class="me-3" id="precio-cantidad">
                            <div class="h6">
                                <h>Precio: <span id="precioUnitario">$ 25.00 MXN</span></h>
                                <h>Cantidad: <span id="cantidadUnidades">10 unidades</span></h>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`;

let orderContainer = document.querySelector("div.orderContainer");

for (let i=1; i <= 10; i++) {
    orderContainer.innerHTML += code;
}