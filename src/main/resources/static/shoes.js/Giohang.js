var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
// Modal


var modal = $(".modal");
var btn = document.getElementById("cart");
var close = $(".close");

var close_footer = $(".close-footer");
var order = document.getElementsByClassName("order")[0];
function opencart() {
   modal.classList.toggle("opencart")
}

btn.onclick = () => opencart();
close.onclick = () => opencart();
close_footer.onclick = () => opencart();


var list = [];
const btns = $$('.icon-car');
var id = 0;
var cartList = $('.cart-list');
var totalprice = $('.cart-total-price')
var nf = Intl.NumberFormat('ja-JP');


btns.forEach(function (btn) {
   btn.onclick = function (e) {
      var product = e.target.parentElement.parentElement;
      var img = product.querySelector('img').src
      var name = product.querySelector('.name').innerText
      var price = product.querySelector('.car-price').innerText

      var addDiv = document.createElement('div');
      addDiv.classList.add('cart-row')
      var text = loadSP(img, name, price)
      addDiv.innerHTML = text
      cartList.append(addDiv);
      removecart();
   }
})
function loadSP(img, name, price) {
   return `
         <div class="cart-item cart-column">
               <img class="cart-item-image" src="${img}"
                  width="100" height="100">
               <span class="cart-item-title">${name}</span>
         </div>
         <span class="cart-price cart-column" style = "margin-right: 1px;">${price}</span><span style = "margin-top:39px;"> VND</span>
         <div class="cart-quantity cart-column">
               <input class="cart-quantity-input" type="number"
                  value="1" min="1" max="99" style = 'margin-left: 74px;
                  margin-right: 12px;'>
               <button class="btn btn-danger" type="button">Xóa</button>
         </div>
      `
}

function removecart() {
   sum();
   var btndels = $$('.btn-danger');
   btndels.forEach(function (btn) {
      btn.onclick = function (e) {
         e.target.parentElement.parentElement.remove();
         sum();
      }
   })

   var ips = $$('.cart-quantity-input');
   ips.forEach(function (ip) {
      ip.onchange = function () {
         sum();
      }
   })

}

function sum() {
   var result = 0;
   var itemCarts = $$('.cart-row');
   var itemvalues = $$('.cart-quantity-input')
   var prices = $$('.cart-price');
   itemCarts.forEach(function (itemCart, index) {
      var itemvalue = itemvalues[index].value;

      var price = prices[index].innerText;
      price = Number(price.replace(/,/g, ''))
      result += price * itemvalue;
   })
   totalprice.innerHTML = `${nf.format(result)} VND`
}


