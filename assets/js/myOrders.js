

var datos = {
    1: {
        date: "12/06/2022",
        productos: {
            1 : {
                nombre: "Lagartonaaaa",
                img: "./assets/img/productos/lager.webp",
                descripcion: "Se trata de una bebida tipo pale lager, que produce muy poca y blanca espuma. Es de cuerpo ligero a medio.",
                cantidad: 20,
                precioUnitario: 25
            },
            2 : {
                nombre: "La Brü",
                img: "./assets/img/productos/la-bru.webp",
                descripcion: "Cerveza Tradicional y Artesanal",
                cantidad: 3,
                precioUnitario: 75
            },
            3 : {
                nombre: "Kawamita Tradicional",
                img: "./assets/img/productos/kawamita.jpg",
                descripcion: "La kawamita es una cerveza tradicional en Tacambaro, es una cerveza fuerte con 20 grados de alcohol.",
                cantidad: 2,
                precioUnitario: 80
            }
        },
        total: (20*25) + (3*75) + (2*80)
    },

    2: {
        date: "29/12/2021",
        productos: {
            1: {
                nombre: "La Brü",
                img: "./assets/img/productos/la-bru.webp",
                descripcion: "Cerveza Tradicional y Artesanal",
                cantidad: 10,
                precioUnitario: 70
            },
            2 : {
                nombre: "Corona",
                img: "./assets/img/productos/corona.jpg",
                descripcion: "Cerveza Corona Extra es la marca líder en el mercado nacional, la cerveza mexicana de mayor venta en el mundo y es la única marca Latinoamericana en figurar entre las 100 marcas globales más valiosas del mundo, siendo una de las seis marcas de cerveza más valiosas a nivel mundia, según el Ranking Brandz Top 100 Global Brands. Es una cerveza tipo Pilsner de 4.5º de alcohol que actualmente se vende en más de 180 países en los cinco continentes. Corona Extra comenzó a elaborarse en la Ciudad de México en 1925 en la Cervecería Modelo.",
                cantidad: 80,
                precioUnitario: 15
            },
            3 : {
                nombre: "Kawamita Tradicional",
                img: "./assets/img/productos/kawamita.jpg",
                descripcion: "La kawamita es una cerveza tradicional en Tacambaro, es una cerveza fuerte con 20 grados de alcohol.",
                cantidad: 10,
                precioUnitario: 80
            }
            },
        total: (10*70) + (80*15) + (10*70)
    },
}




var myOrders = document.getElementById("MyOrders");

for (let i=1; i<=Object.entries(datos).length ; i++) {
    let orderContainer = `  <div class="row m-1 mb-3" id="Order">
                                <div class="col-6" id="OrderDate">${datos[i].date}</div>
                                <div class="col-6" id="TotalPrice">Total:<span id="TotalPrice">${datos[i].total} MXN</span></div>

                                <div class="OrderList" id="Order-${i}" >
                                    
                                </div>

                            </div>`;


    myOrders.innerHTML += orderContainer;
    let OrderList = document.querySelector("#Order-" + i);

    for (let j=1; j <= Object.entries(datos[i].productos).length ; j++){
        
        let product = `
                    <div class="Product">
                        <div class="Image">
                            <img src=${datos[i].productos[j].img}>
                        </div>

                        <div class="Tittle h6">
                            ${datos[i].productos[j].nombre}
                        </div>
                        <div class="BuyAgain">
                            <button class="boton">
                                Agregar al Carrito
                            </button>
                        </div>
                        <div class="Info">
                            ${datos[i].productos[j].descripcion}
                        </div>

                        <div class="Price">
                            <ul>
                                <li> Precio:<span>${datos[i].productos[j].precioUnitario} MXN.</span> </li>
                                <li> Cantidad:<span>${datos[i].productos[j].cantidad} uds.</span> </li>
                            </ul>

                        </div>

                    </div>`;
        OrderList.innerHTML += product;
    }

}





