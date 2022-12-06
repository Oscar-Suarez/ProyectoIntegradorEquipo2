// document.getElementById('eliminarDiv').addEventListener('click', function(){
//     document.getElementById('alerta18').remove();
// })

//alerta
const botonAceptarCookies = document.getElementById('ocutarDiv');
const avisoCookies=document.getElementById('alerta18');

if(!localStorage.getItem('cookies-aceptadas')){
    avisoCookies.classList.add('activo');
}





botonAceptarCookies.addEventListener('click', ()=>{
    avisoCookies.classList.remove('activo');

    localStorage.setItem('cookies-aceptadas', true);
});


// carusel

const myCarouselElement = document.querySelector('#carouselExampleControls')
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 20000
});

//****2****/
const myCarouselElement2 = document.querySelector('#carousel')
const carousel2 = new bootstrap.Carousel(myCarouselElement2, {
    interval: false,
});