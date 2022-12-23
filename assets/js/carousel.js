

fetch("http://localhost:8080/balxhe/Cervezas/")
    .then((response) => response.json())
    .then((products) => {
        for (const [index, beer] of Object.entries(products)) {
            if (index < 10){
                let code = `<div class="carousel-item">
                <div class="elementBestSellers">
                    <a href="./product-page.html?productID=${beer["id"]}">
                        <div class="BeerName" id="BestSellerItem">
                            <h4 id="BeerName">${beer["cervezaNombre"]}</h4>
                        </div>
                        <img src="./assets/img/productos/${beer["cervezaImg"]}">
                    </a>
                </div>
            </div>`;
            if (index == 1) {
                code = `<div class="carousel-item active">
                <div class="elementBestSellers">
                    <a href="./product-page.html?productID=${beer["id"]}">
                        <div class="BeerName" id="BestSellerItem">
                            <h4 id="BeerName">${beer["cervezaNombre"]}</h4>
                        </div>
                        <img src="./assets/img/productos/${beer["cervezaImg"]}">
                    </a>
                </div>
            </div>`;
            }


            let carouselTop = document.querySelector(".top-ventas#carouselMultiple");
            carouselTop.innerHTML += code;

            }
            
         
            
        }

        for (const [index, beer] of Object.entries(products)) {
            
            let code = `<div class="carousel-item">
                <div class="elementBestSellers">
                    <a href="./product-page.html?productID=${beer["id"]}">
                        <div class="BeerName" id="BestSellerItem">
                            <h4 id="BeerName">${beer["cervezaNombre"]}</h4>
                        </div>
                        <img src="./assets/img/productos/${beer["cervezaImg"]}">
                    </a>
                </div>
            </div>`;
            if (index == 11) {
                code = `<div class="carousel-item active">
                <div class="elementBestSellers">
                    <a href="./product-page.html?productID=${beer["id"]}">
                        <div class="BeerName" id="BestSellerItem">
                            <h4 id="BeerName">${beer["cervezaNombre"]}</h4>
                        </div>
                        <img src="./assets/img/productos/${beer["cervezaImg"]}">
                    </a>
                </div>
            </div>`;
            }

            
            let carouselNew = document.querySelector(".new-products#carouselMultiple");
            carouselNew.innerHTML += code;
            
        }
    })

//Carrusel

setTimeout(() => {

    let items = document.querySelectorAll('#carouselMultiple .carousel-item')

    if(items != null){
        items.forEach((el) => {

            var slides = items.length;
            let next = el.nextElementSibling;
            for (var i = 1; i < slides; i++) {
                if (!next) {
                    next = items[0]
                }
                let cloneChild = next.cloneNode(true)
                el.appendChild(cloneChild.children[0])
                next = next.nextElementSibling
            }
        })
    }
}, 250)
