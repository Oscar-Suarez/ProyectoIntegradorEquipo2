fetch("https://apibalxhe-production.up.railway.app/balxhe/Cervezas/")
    .then((response) => response.json())
    .then((products) => {
        let orderContainer = document.querySelector("div.orderContainer");
        let subtotal = 0;
        let descuentos = 0.10;
        let envio = 50;
        let impuestos = 0.16;
        let total = 0;

        for (const [index, beer] of Object.entries(products)) {

            if (index < 14 && index > 5){
                let code = `
                <div class="card mb-3">
                    <div class="row">
                        <div class="col-sm-3 center">
                            <img src="./assets/img/productos/${beer["cervezaImg"]}" class="img-fluid rounded-start">
                        </div>

                        <div class="col-sm-9 p-">
                            <div class="card-body">
                                <h5 class="card-title">${beer["cervezaNombre"]}</h5>
                                <p class="card-text" style="max-height: 28px; overflow: hidden;">${beer["cervezainfo"]}
                                </p>
                                <div class="me-3" id="precio-cantidad">
                                    <div class="h6">
                                        <h>Precio: <span id="precioUnitario">$ ${beer["cervezaPrecio"]} MXN</span></h>
                                        <h>Cantidad: <span id="cantidadUnidades">${beer["cervezaStock"]} unidades</span></h>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `;
        total += beer["cervezaPrecio"] * beer["cervezaStock"]


           
        
        orderContainer.innerHTML += code;
            }
            
        }
        const totalF = total + envio
        const subtotalF =  totalF - (total * impuestos)
        const impuestosF = totalF * impuestos

        document.querySelector("span#total").innerHTML =  "$ " + totalF + " MXN"
        document.querySelector("span#Envio").innerHTML = "$ " + envio + ".00 MXN"
        document.querySelector("span#impuestos").innerHTML = "$ " + impuestosF + " MXN"
        document.querySelector("span#subtotal").innerHTML = "$ " + subtotalF + " MXN"
    })




