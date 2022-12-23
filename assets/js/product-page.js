const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idProduct = urlParams.get("productID");
console.log(idProduct)

fetch("https://apibalxhe-production.up.railway.app/balxhe/Cervezas/"+idProduct)
.then((response) => response.json())
.then((product) => {
    console.log(product)
    document.querySelector("header#beerName").innerHTML = product["cervezaNombre"]
    document.querySelector("article.description").innerHTML = product["cervezainfo"]
    document.querySelector("div#productPrice").innerHTML = "<b>Precio: $" + product["cervezaPrecio"] +"</b>"
    document.querySelector("section#imgContainer > img").src = "./assets/img/productos/" + product["cervezaImg"]
    document.querySelector("span#amount").innerHTML = product["cervezaStock"]
})



fetch("https://apibalxhe-production.up.railway.app/balxhe/Cervezas/")
    .then((response) => response.json())
    .then((products) => {
        for (const [index, beer] of Object.entries(products)) {
            console.log(index, beer)
            let code = `<div class="item">
                        <div class="elementBestSellers">
                        <a href="./product-page.html?productID=${beer["id"]}">
                        <div class="BeerName" id="BestSellerItem">
                            <h4 id="BeerName text-center">${beer["cervezaNombre"]}</h4>
                        </div>
                        <img src="./assets/img/productos/${beer["cervezaImg"]}">
                        </a>
                        </div>
                        </div>`
        document.querySelector("div#carousel-own").innerHTML += code;
        }
    })