var productId = window.location.search.substring(1);  // Получаем ID продукта из URL
var cart = JSON.parse(localStorage.getItem('cart')) || [];  // Получаем корзину из localStorage или создаем новую

// Предположим, что данные продукта приходят из этого массива
const products = [
    {
        id: 0,
        image: '',
        title: 'Z Flip Foldable Mobile',
        price: 120,
    },
    // ...другие продукты
];

var product = products.find(product => product.id == productId);  // Находим продукт по ID

function addtocart(){
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));  // Сохраняем корзину в localStorage
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    localStorage.setItem('cart', JSON.stringify(cart));  // Сохраняем корзину в localStorage
    displaycart();
}

function displaycart(){
    // ...ваш код отображения корзины
}

// Показываем детали продукта
document.getElementById('root').innerHTML = `
    <div class='img-box'>
        <img class='images' src=${product.image}></img>
    </div>
    <div class='bottom'>
        <p>${product.title}</p>
        <h2>$ ${product.price}.00</h2>
        <button onclick='addtocart()'>Add to cart</button>
    </div>
`;

displaycart();  // Отображаем текущее состояние корзины
