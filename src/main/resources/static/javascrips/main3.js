var slide = [
    '/image/banner-right3.png',
    '/image/banner-right4.png',
];
var myindex = 0;
setInterval(change,3000)
var element = document.querySelector('.header-item')
function change(){
    switch (myindex) {
        case 0:
            element.src = slide[0];
            break;
        case 1:
            element.src = slide[1];
            break;
            
    }
    myindex ++;
    if(myindex > slide.length){
        myindex = 0;
    }
}
// product-moto-car
var items = document.querySelectorAll('.item-car-moto')
var itemProducts = document.querySelectorAll('.product-car-moto')
items.forEach(function(item, index){
    // item.classList.add('active');
    var product = itemProducts[index]
    item.onclick = function() {
        document.querySelector('.item-car-moto.active').classList.remove('active');
        document.querySelector('.product-car-moto.active').classList.remove('active');

        this.classList.add('active');
        product.classList.add('active');
    }
})




