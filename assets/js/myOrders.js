

fetch("http://localhost:8080/balxhe/Cervezas/")
.then((response) => response.json())
.then((products) => {

    var datos = {
        1: {
            date: "12/06/2022",
            productos: {

            },
            total: 0
        },
        2: {
            date: "01/12/2021",
            productos: {

            },
            total: 0
        },
        3: {
            date: "30/11/2020",
            productos: {

            },
            total: 0
        }
    }

    for (const [index, beer] of Object.entries(products)) {

        if (index <= 4) {

            datos[1].productos[parseInt(index)+1] = {
                nombre: beer["cervezaNombre"],
                img: "./assets/img/productos/" + beer["cervezaImg"],
                descripcion: beer["cervezainfo"],
                cantidad: beer["cervezaStock"] - 50,
                precioUnitario: beer["cervezaPrecio"]
            }
            datos[1].total += (beer["cervezaStock"] - 50) * beer["cervezaPrecio"]
        } else if (index >= 5 && index < 10) {
            datos[2].productos[index-4] = {
                nombre: beer["cervezaNombre"],
                img: "./assets/img/productos/" + beer["cervezaImg"],
                descripcion: beer["cervezainfo"],
                cantidad: beer["cervezaStock"],
                precioUnitario: beer["cervezaPrecio"]
            }
            datos[2].total += (beer["cervezaStock"] - 50) * beer["cervezaPrecio"]
        } else if (index >= 10 ) {
            datos[3].productos[index-9] = {
                nombre: beer["cervezaNombre"],
                img: "./assets/img/productos/" + beer["cervezaImg"],
                descripcion: beer["cervezainfo"],
                cantidad: beer["cervezaStock"],
                precioUnitario: beer["cervezaPrecio"]
            }
            datos[3].total += (beer["cervezaStock"]) * beer["cervezaPrecio"]
        }
    }
     console.log(datos)
    
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
             console.log(i, j)
             let product = `
                         <div class="Product">
                             <div class="Image">
                                 <img src=${datos[i].productos[j].img}>
                             </div>
     
                             <div class="Tittle h5">
                                 ${datos[i].productos[j].nombre}
                             </div>
                             <div class="BuyAgain">
                                 <button class="boton">
                                     Agregar al Carrito
                                 </button>
                             </div>
                             <div class="Info" style="max-height: 86px; overflow: hidden; font-size: 14px;">
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

    }
)












