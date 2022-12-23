

fetch("http://localhost:8080/balxhe/Cervezas/")
    .then((response) => response.json())
    .then((products) => {
        for (const [index, beer] of Object.entries(products)) {
            
            let code = `<div class="product">
                            <a href="./product-page.html?productID=${beer["id"]}"><div class="imageProduct">
                                <img src="./assets/img/productos/${beer["cervezaImg"]}" alt="">
                            </div></a>
                            <div class="descriptionProduct">
                                <p class="nameProduct">${beer["cervezaNombre"]}</p>
                                <p class="priceProduct">Precio: <b>$${beer["cervezaPrecio"]}</b></p>
                                <button class="boton buttonAddCart">Añadir al carrito</button>
                            </div>
                        </div>`
        document.querySelector("div#products").innerHTML += code;
        }
    })