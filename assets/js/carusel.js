let items = document.querySelectorAll('#carouselMultiple .carousel-item')


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

document.querySelector('#carouselMultiple').onresize = (event) => {
    if(screen.width < 576){
        console.log("yes");
    }
};