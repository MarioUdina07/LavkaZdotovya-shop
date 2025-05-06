const products = {
    vitamins: [{ name: 'Витамин C', price: 300 }, { name: 'Витамин D', price: 400 }],
    supplements: [{ name: 'Омега-3', price: 500 }, { name: 'Магний', price: 350 }],
    sport: [{ name: 'Протеин', price: 1500 }, { name: 'Креатин', price: 1200 }],
    medical: [{ name: 'Бинты', price: 100 }, { name: 'Пластыри', price: 50 }],
    dental: [{ name: 'Зубные щетки', price: 150 }, { name: 'Паста лечебная', price: 250 }]
};
let cart = [];

function showProducts(category) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products[category].forEach(p => {
        const item = document.createElement('div');
        item.innerHTML = `${p.name} - ${p.price}₽ <button onclick="addToCart('${p.name}', ${p.price})">Добавить</button>`;
        productList.appendChild(item);
    });
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}₽`;
        cartList.appendChild(li);
    });
}

function checkout() {
    alert('Заказ оформлен! Мы свяжемся с вами.');
    cart = [];
    updateCart();
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

window.onload = () => {
    document.getElementById('popup').style.display = 'block';
};
