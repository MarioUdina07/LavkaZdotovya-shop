let cart = [];

function addToCart(item) {
    cart.push(item);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
    });
}

function checkout() {
    alert('Заказ оформлен! Мы с вами свяжемся.');
    cart = [];
    updateCart();
}
