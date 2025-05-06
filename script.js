const products = {
    'Лекарства': [{ name: 'Парацетамол', price: 100 }, { name: 'Ибупрофен', price: 150 }],
    'Витамины': [{ name: 'Витамин C', price: 200 }, { name: 'Витамин D', price: 250 }],
    'Спортпит': [{ name: 'Протеин', price: 1500 }, { name: 'BCAA', price: 1200 }],
    'Медтовары': [{ name: 'Пластыри', price: 50 }, { name: 'Бинт', price: 80 }],
    'Стоматология': [{ name: 'Зубная паста', price: 100 }, { name: 'Щетка', price: 150 }]
};

let cart = [];

function showCategory(category) {
    const list = document.getElementById('product-list');
    list.innerHTML = `<h2>${category}</h2>`;
    products[category].forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `${item.name} — ${item.price}₽ <button onclick="addToCart('${item.name}', ${item.price})">Добавить</button>`;
        list.appendChild(div);
    });
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.name} — ${item.price}₽`;
        cartList.appendChild(li);
    });
    document.getElementById('total-price').textContent = total;
}

function checkout() {
    alert('Ваш заказ оформлен! Мы свяжемся с вами.');
    cart = [];
    updateCart();
}

function openFeedback() {
    document.getElementById('popup').classList.remove('hidden');
}

function closeFeedback() {
    document.getElementById('popup').classList.add('hidden');
}

function showEducational() {
    const list = document.getElementById('product-list');
    list.innerHTML = `
        <h2>Советы по здоровью</h2>
        <p>Читайте наши статьи и рекомендации на сайте и в Telegram!</p>
        <p><a href="https://t.me/yourchannel" target="_blank">Перейти в Telegram-канал</a></p>
    `;
}
