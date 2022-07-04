
if (document.readyState == "loading") {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {
    let deleteButton = document.getElementsByClassName('btn-red');
    for (let i = 0; i < deleteButton.length; i++) {
        let button = deleteButton[i];
        button.addEventListener('click', deleteRow)
        totalCart()
    }
    let cartQuantity = document.getElementsByClassName('quantity-value');
    for (let i = 0; i < cartQuantity.length; i++) {
        let button = cartQuantity[i];
        button.addEventListener('change', quantityOfCart)
    }
    let addRow = document.getElementsByClassName('btn-blue');
    for (let i = 0; i < addRow.length; i++) {
        let button = addRow[i];
        button.addEventListener('click', addToCart)

    }
    let purchaseButton = document.getElementsByClassName('purchase')[0];
    purchaseButton.addEventListener('click', purchaseCart)

}

function deleteRow(e) {
    let target = e.target;
    target.parentNode.parentNode.remove();
    totalCart()
}

function quantityOfCart(e) {
    let target = e.target;
    if (target.value < 1) {
        target.value = 1;
    }
    totalCart();
}

function addToCart(e) {
    let target = e.target;
    let row = target.parentNode.parentNode;
    let title = row.getElementsByClassName('title')[0].innerText;
    let image = row.getElementsByClassName('image')[0].src;
    let rates = row.getElementsByClassName('rates')[0].innerText;


    addInsideCart(title, image, rates)
}
function addInsideCart(title, image, rates) {

    let cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    let cart = document.getElementsByClassName('all-rows')[0];
    let cartName = cart.getElementsByClassName('nameOfCart');

    for (let i = 0; i < cartName.length; i++) {

        if (cartName[i].innerText === title) {
            alert("this is already in your cart")
            return
        }
    }
    cartRow.innerHTML = ` <div class="cart cart-items merch-photo">
    <img src="${image}"
        width="50" height="50">
    <span class="nameOfCart">${title}</span>
</div>
<span class="cart cart-price">${rates}</span>
<div class="cart cart-quantity cart-input">
    <input class="quantity-value" type="number" value="1">
    <button class="btn-red" type="button">REMOVE</button>
</div>`

    cart.append(cartRow)
    let removeButton = cart.getElementsByClassName('btn-red');
    for (let i = 0; i < removeButton.length; i++) {
        let remove = removeButton[i]
        remove.addEventListener('click', deleteRow)
    }
    let quantity = cart.getElementsByClassName('cart-quantity');
    for (let i = 0; i < quantity.length; i++) {
        quantity[i].addEventListener('change', quantityOfCart)
    }
    totalCart()
}




function purchaseCart() {
    let cart = document.getElementsByClassName('all-rows')[0];
    let cartRows = cart.getElementsByClassName('cart-row');
    
    if (cartRows.length == 0) {
        alert('No item in your cart')
    } else {
        alert('Thank you for your purchase');
    }

    for (let i = 0; i < cartRows.length; i++) {
        while (cartRows[i]) {
            cart.removeChild(cartRows[i])
        }
    }

    totalCart();
}

function totalCart() {
    let allRows = document.getElementsByClassName('all-rows')[0];
    let row = allRows.getElementsByClassName('cart-row');
    let total = 0;
    for (let i = 0; i < row.length; i++) {
        let rows = row[i];
        let quantityElement = rows.getElementsByClassName('quantity-value')[0];
        let priceElement = rows.getElementsByClassName('cart-price')[0];
        let price = parseFloat(priceElement.innerText.replace('rs', ''));
        let quantity = quantityElement.value;
        total = total + price * quantity;
    }
    total = Math.round(total * 100) / 100
    let grandTotal = document.getElementsByClassName('item-total')[0].innerText = total + "rs";
}


