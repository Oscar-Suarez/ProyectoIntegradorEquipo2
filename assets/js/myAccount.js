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
            <button class="boton">
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
            <button class="boton">
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

