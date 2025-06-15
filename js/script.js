// Закрытие модального окна
function closeLogoModal() {
  document.getElementById('logo-modal').style.display = 'none';
}


// Данные о продуктах
const products = [
  // Столы
  {
    id: 1,
    name: "Обеденный стол 'Элеганс'",
    description: "Современный обеденный стол из массива дуба, идеально подходящий для больших семейных ужинов. Прочная конструкция и элегантный дизайн делают его отличным выбором для любой столовой.",
    price: 35000,
    category: "tables",
    images: [
      "https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/279626/pexels-photo-279626.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop"
    ],
    material: "Массив дуба",
    dimensions: "180 x 90 x 75 см",
    color: "Натуральный дуб"
  },
  {
    id: 2,
    name: "Письменный стол 'Минимал'",
    description: "Компактный письменный стол для офиса или домашнего кабинета. Минималистичный дизайн и функциональность делают его идеальным для небольших помещений.",
    price: 15000,
    category: "tables",
    images: [
      "https://images.pexels.com/photos/159839/office-home-house-desk-159839.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop"
    ],
    material: "ЛДСП",
    dimensions: "120 x 60 x 75 см",
    color: "Белый"
  },
  {
    id: 3,
    name: "Кофейный столик 'Лофт'",
    description: "Стильный кофейный столик в индустриальном стиле лофт. Отлично смотрится в современных гостиных, добавляя нотку уюта и функциональности.",
    price: 12000,
    category: "tables",
    images: [
      "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/2090486/pexels-photo-2090486.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop"
    ],
    material: "Металл и дерево",
    dimensions: "80 x 80 x 45 см",
    color: "Чёрный/Коричневый"
  },
  {
    id: 4,
    name: "Стол-трансформер 'Модерн'",
    description: "Удобный стол-трансформер для небольших пространств. Может использоваться как журнальный столик или раскладываться в обеденный стол.",
    price: 22000,
    category: "tables",
    images: [
      "https://ehmebel.ru/wp-content/uploads/2022/03/2061-03-1320x894.jpg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/279618/pexels-photo-279618.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop"
    ],
    material: "МДФ",
    dimensions: "120-180 x 80 x 40-75 см",
    color: "Серый"
  },
  // Стулья
  {
    id: 5,
    name: "Стул 'Комфорт'",
    description: "Мягкий стул с обивкой из экокожи, обеспечивающий комфорт во время длительного сидения. Подходит для столовой или гостиной.",
    price: 8000,
    category: "chairs",
    images: [
      "https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/276651/pexels-photo-276651.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop"
    ],
    material: "Экокожа, металл",
    dimensions: "45 x 50 x 85 см",
    color: "Чёрный"
  },
  {
    id: 6,
    name: "Стул 'Сканди'",
    description: "Стул в скандинавском стиле с деревянными ножками. Лёгкий и стильный, идеально подходит для современных интерьеров.",
    price: 6000,
    category: "chairs",
    images: [
      "https://images.pexels.com/photos/1114896/pexels-photo-1114896.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop"
    ],
    material: "Пластик, дерево",
    dimensions: "48 x 52 x 82 см",
    color: "Белый/Натуральное дерево"
  },
  {
    id: 7,
    name: "Барный стул 'Хай-тек'",
    description: "Высокий барный стул в стиле хай-тек. Подходит для барных стоек и современных кухонь.",
    price: 10000,
    category: "chairs",
    images: [
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/2080362/pexels-photo-2080362.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/276651/pexels-photo-276651.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop"
    ],
    material: "Металл, экокожа",
    dimensions: "40 x 40 x 90-110 см",
    color: "Чёрный"
  },
  {
    id: 8,
    name: "Стул 'Классика'",
    description: "Классический стул с резьбой, добавляющий элегантности любому интерьеру. Подходит для столовой или гостиной.",
    price: 9000,
    category: "chairs",
    images: [
      "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop"
    ],
    material: "Дерево, ткань",
    dimensions: "45 x 50 x 90 см",
    color: "Коричневый"
  },
  // Шкафы
  {
    id: 9,
    name: "Шкаф-купе 'Простор'",
    description: "Вместительный шкаф-купе с зеркальными дверями. Идеально подходит для спальни, обеспечивая достаточно места для хранения.",
    price: 45000,
    category: "cabinets",
    images: [
      "https://images.pexels.com/photos/5998040/pexels-photo-5998040.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/5998044/pexels-photo-5998044.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/5824519/pexels-photo-5824519.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop"
    ],
    material: "ЛДСП, зеркало",
    dimensions: "200 x 60 x 220 см",
    color: "Белый"
  },
  {
    id: 10,
    name: "Книжный шкаф 'Библио'",
    description: "Шкаф для книг с открытыми полками. Отлично подходит для домашней библиотеки или рабочего кабинета.",
    price: 20000,
    category: "cabinets",
    images: [
      "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/5998040/pexels-photo-5998040.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/5998044/pexels-photo-5998044.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop"
    ],
    material: "МДФ",
    dimensions: "120 x 30 x 180 см",
    color: "Коричневый"
  },
  {
    id: 11,
    name: "Гардеробный шкаф 'Модерн'",
    description: "Шкаф с раздвижными дверями для спальни. Современный дизайн и функциональность для хранения одежды.",
    price: 38000,
    category: "cabinets",
    images: [
      "https://images.pexels.com/photos/5998044/pexels-photo-5998044.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/5824519/pexels-photo-5824519.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop"
    ],
    material: "ЛДСП",
    dimensions: "180 x 60 x 220 см",
    color: "Серый"
  },
  {
    id: 12,
    name: "Шкаф 'Универсал'",
    description: "Универсальный шкаф для любых помещений. Простой и функциональный, подходит для спальни, гостиной или прихожей.",
    price: 30000,
    category: "cabinets",
    images: [
      "https://images.pexels.com/photos/5824519/pexels-photo-5824519.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/5998040/pexels-photo-5998040.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop"
    ],
    material: "ЛДСП",
    dimensions: "150 x 50 x 200 см",
    color: "Белый"
  },
  // Диваны
  {
    id: 13,
    name: "Диван 'Релакс'",
    description: "Удобный диван для гостиной с мягкой обивкой. Создаёт уютную атмосферу и обеспечивает комфорт для всей семьи.",
    price: 55000,
    category: "sofas",
    images: [
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/276651/pexels-photo-276651.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop"
    ],
    material: "Ткань, дерево",
    dimensions: "220 x 90 x 85 см",
    color: "Серый"
  },
  {
    id: 14,
    name: "Диван-кровать 'Соната'",
    description: "Раскладной диван-кровать для небольших квартир. Удобен как для сидения, так и для сна.",
    price: 40000,
    category: "sofas",
    images: [
      "https://images.pexels.com/photos/9030019/pexels-photo-9030019.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/276651/pexels-photo-276651.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop"
    ],
    material: "Ткань, металл",
    dimensions: "200 x 90 x 80 см",
    color: "Бежевый"
  },
  {
    id: 15,
    name: "Угловой диван 'Панорама'",
    description: "Большой угловой диван для всей семьи. Просторный и комфортный, с дополнительным местом для хранения.",
    price: 70000,
    category: "sofas",
    images: [
      "https://images.pexels.com/photos/276651/pexels-photo-276651.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop"
    ],
    material: "Ткань, дерево",
    dimensions: "250 x 200 x 90 см",
    color: "Синий"
  },
  {
    id: 16,
    name: "Диван 'Лофт'",
    description: "Стильный диван в индустриальном стиле. Подходит для современных интерьеров с акцентом на минимализм.",
    price: 48000,
    category: "sofas",
    images: [
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop",
      "https://images.pexels.com/photos/276651/pexels-photo-276651.jpeg?auto=compress&cs=tinysrgb&w=500&h=250&fit=crop"
    ],
    material: "Экокожа, металл",
    dimensions: "210 x 85 x 80 см",
    color: "Чёрный"
  }
];

// Корзина
let cart = [];

// Функция для загрузки корзины из localStorage
function loadCart() {
  try {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      cart = JSON.parse(storedCart);
      if (!Array.isArray(cart)) {
        console.error('Данные корзины повреждены, очищаем localStorage');
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    } else {
      cart = [];
    }
    console.log('Корзина загружена:', cart);
    updateCartCount();
  } catch (error) {
    console.error('Ошибка загрузки корзины из localStorage:', error);
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

// Функция для сохранения корзины в localStorage
function saveCart() {
  try {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Корзина сохранена:', cart);
    updateCartCount();
  } catch (error) {
    console.error('Ошибка сохранения корзины в localStorage:', error);
    showNotification('Ошибка сохранения корзины!');
  }
}

// Функция для обновления количества товаров в навигации
function updateCartCount() {
  const cartLink = document.querySelector('.nav-link[href="cart.html"]');
  if (cartLink) {
    const existingBadge = cartLink.querySelector('.badge');
    if (existingBadge) existingBadge.remove();
    if (cart.length > 0) {
      const badge = document.createElement('span');
      badge.className = 'badge bg-danger ms-1';
      badge.textContent = cart.length;
      cartLink.appendChild(badge);
    }
  }
}

// Функция для показа уведомления
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'cart-notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.add('hide');
    setTimeout(() => {
      notification.remove();
    }, 500);
  }, 3000);
}

// Отображение продуктов с ссылкой на страницу товара
function displayProducts(productsToShow) {
  const productList = document.getElementById('product-list');
  if (!productList) return;
  productList.innerHTML = '';
  productsToShow.forEach((product) => {
    const productCard = `
      <div class="col-md-3 mb-4">
        <div class="card bg-dark text-light border-0 shadow-sm">
          <a href="product.html?id=${product.id}" class="card-link">
            <img src="${product.images[0]}" class="card-img-top" alt="${product.name}">
          </a>
          <div class="card-body">
            <h5 class="card-title fw-bold">${product.name}</h5>
            <p class="card-text">${product.description.split('. ')[0] + '.'}</p>
            <p class="card-text fw-bold">${product.price} ₽</p>
            <button class="btn btn-custom add-to-cart-btn" data-product-id="${product.id}">В корзину</button>
          </div>
        </div>
      </div>
    `;
    productList.innerHTML += productCard;
  });

  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const productId = parseInt(button.getAttribute('data-product-id'));
      console.log('Добавление товара в корзину, ID:', productId);
      addToCart(productId);
    });
  });
}

// Добавление в корзину
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) {
    console.error('Товар не найден:', productId);
    showNotification('Товар не найден!');
    return;
  }
  const existingProduct = cart.find(item => item.id === productId);
  if (existingProduct) {
    showNotification(`${product.name} уже в корзине!`);
    return;
  }
  cart.push(product);
  saveCart();
  showNotification('Ваш товар добавлен в корзину!');
  console.log('Товар добавлен:', product);
  console.log('Текущая корзина:', cart);
}

// Отображение корзины
function displayCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  if (!cartItems || !cartTotal) {
    console.error('Элементы корзины не найдены на странице!');
    return;
  }

  console.log('Отображение корзины, текущие товары:', cart);

  cartItems.innerHTML = '';
  if (!cart || cart.length === 0) {
    cartItems.innerHTML = '<p class="text-center text-light">Ваша корзина пуста.</p>';
    cartTotal.textContent = '0 ₽';
    console.log('Корзина пуста');
    return;
  }

  let total = 0;
  cart.forEach((item, index) => {
    if (!item || !item.price || !item.images || !item.images[0]) {
      console.error('Некорректный товар в корзине:', item);
      return;
    }
    total += item.price;
    const cartItem = `
      <div class="cart-item">
        <img src="${item.images[0]}" alt="${item.name}">
        <div>
          <h5>${item.name}</h5>
          <p>${item.description.split('. ')[0] + '.'}</p>
          <p class="fw-bold">${item.price} ₽</p>
        </div>
        <button class="btn btn-custom remove-from-cart-btn" data-index="${index}">Удалить</button>
      </div>
    `;
    cartItems.innerHTML += cartItem;
  });

  cartTotal.textContent = `${total} ₽`;
  console.log('Общая сумма:', total);

  document.querySelectorAll('.remove-from-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
      const index = parseInt(button.getAttribute('data-index'));
      console.log('Удаление товара из корзины, индекс:', index);
      removeFromCart(index);
    });
  });
}

// Отображение товаров в заказе (на странице checkout.html)
function displayOrderItems() {
  const orderItems = document.getElementById('order-items');
  const orderTotal = document.getElementById('order-total');
  if (!orderItems || !orderTotal) {
    console.error('Элементы заказа не найдены на странице!');
    return;
  }

  console.log('Отображение товаров в заказе, текущие товары:', cart);

  orderItems.innerHTML = '';
  if (!cart || cart.length === 0) {
    orderItems.innerHTML = '<p class="text-center text-light">Ваш заказ пуст. Добавьте товары в корзину.</p>';
    orderTotal.textContent = '0 ₽';
    console.log('Заказ пуст');
    return;
  }

  let total = 0;
  cart.forEach((item) => {
    if (!item || !item.price || !item.images || !item.images[0]) {
      console.error('Некорректный товар в заказе:', item);
      return;
    }
    total += item.price;
    const orderItem = `
      <div class="cart-item">
        <img src="${item.images[0]}" alt="${item.name}">
        <div>
          <h5>${item.name}</h5>
          <p>${item.description.split('. ')[0] + '.'}</p>
          <p class="fw-bold">${item.price} ₽</p>
        </div>
      </div>
    `;
    orderItems.innerHTML += orderItem;
  });

  orderTotal.textContent = `${total} ₽`;
  console.log('Общая сумма заказа:', total);
}

// Удаление из корзины
function removeFromCart(index) {
  if (index >= 0 && index < cart.length) {
    const removedItem = cart[index];
    cart.splice(index, 1);
    saveCart();
    displayCart();
    showNotification(`${removedItem.name} удалён из корзины!`);
    console.log('Товар удалён, текущая корзина:', cart);
  } else {
    console.error('Некорректный индекс для удаления:', index);
  }
}

// Фильтрация по категориям
function setupCategoryFilters() {
  const buttons = document.querySelectorAll('.category-filter button');
  if (!buttons.length) return;
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const category = button.getAttribute('data-category');
      const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
      displayProducts(filteredProducts);
    });
  });
}

// Поиск по названию или описанию
function setupSearch() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;
  searchInput.addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchText) || product.description.toLowerCase().includes(searchText)
    );
    displayProducts(filteredProducts);
  });
}

// Отображение информации о товаре на странице product.html
function displayProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  const product = products.find(p => p.id === productId);

  if (product) {
    document.title = `МегаМебель - ${product.name}`;
    const breadcrumbCategory = document.getElementById('breadcrumb-category');
    const breadcrumbProduct = document.getElementById('breadcrumb-product');
    if (breadcrumbCategory && breadcrumbProduct) {
      breadcrumbCategory.textContent = getCategoryName(product.category);
      breadcrumbCategory.href = `catalog.html#${product.category}`;
      breadcrumbProduct.textContent = product.name;
    }

    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-category').innerHTML = `<strong>Категория:</strong> ${getCategoryName(product.category)}`;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-price').textContent = `${product.price} ₽`;
    document.getElementById('product-material').textContent = product.material;
    document.getElementById('product-dimensions').textContent = product.dimensions;
    document.getElementById('product-color').textContent = product.color;

    const mainImage = document.getElementById('main-image');
    mainImage.src = product.images[0];
    const thumbnailsContainer = document.querySelector('.thumbnails');
    thumbnailsContainer.innerHTML = '';
    product.images.forEach((image, index) => {
      const thumbnail = document.createElement('img');
      thumbnail.src = image;
      thumbnail.className = 'thumbnail img-fluid rounded me-2 mb-2';
      thumbnail.style.width = '80px';
      thumbnail.style.height = '80px';
      thumbnail.style.objectFit = 'cover';
      thumbnail.style.cursor = 'pointer';
      thumbnail.addEventListener('click', () => {
        mainImage.src = image;
        document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
        thumbnail.classList.add('active');
      });
      if (index === 0) thumbnail.classList.add('active');
      thumbnailsContainer.appendChild(thumbnail);
    });

    const addToCartBtn = document.getElementById('add-to-cart-btn');
    if (addToCartBtn) {
      addToCartBtn.addEventListener('click', () => {
        console.log('Добавление товара в корзину (страница товара), ID:', product.id);
        addToCart(product.id);
      });
    }

    const buyNowBtn = document.getElementById('buy-now-btn');
    if (buyNowBtn) {
      buyNowBtn.addEventListener('click', () => {
        console.log('Добавление товара в корзину (кнопка "Купить сейчас"), ID:', product.id);
        addToCart(product.id);
        showNotification(`Вы выбрали "Купить сейчас" для ${product.name}. Перейдите в корзину для оформления заказа.`);
        window.location.href = 'cart.html';
      });
    }
  } else {
    const productSection = document.querySelector('.product');
    if (productSection) {
      productSection.innerHTML = '<p class="text-center">Товар не найден.</p>';
    }
  }
}

// Получение названия категории для отображения
function getCategoryName(category) {
  switch (category) {
    case 'tables': return 'Столы';
    case 'chairs': return 'Стулья';
    case 'cabinets': return 'Шкафы';
    case 'sofas': return 'Диваны';
    default: return 'Неизвестная категория';
  }
}

// Обработка оформления заказа
function setupCheckoutForm() {
  const checkoutForm = document.getElementById('checkout-form');
  const formMessage = document.getElementById('form-message');
  if (!checkoutForm || !formMessage) return;

  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Проверка, есть ли товары в корзине
    if (!cart || cart.length === 0) {
      formMessage.innerHTML = '<p class="text-danger">Ваш заказ пуст! Добавьте товары в корзину.</p>';
      return;
    }

    // Получение данных из формы
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const deliveryMethod = document.getElementById('delivery-method').value;

    // Простая валидация
    if (!name || !address || !phone || !email || !deliveryMethod) {
      formMessage.innerHTML = '<p class="text-danger">Пожалуйста, заполните все поля!</p>';
      return;
    }

    // Формирование данных заказа
    const order = {
      customer: { name, address, phone, email, deliveryMethod },
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price, 0),
      date: new Date().toISOString()
    };

    console.log('Заказ сформирован:', order);

    // Очистка корзины
    cart = [];
    saveCart();

    // Отображение сообщения об успехе
    formMessage.innerHTML = '<p class="text-success">Ваш заказ успешно оформлен! Мы свяжемся с вами в ближайшее время.</p>';
    checkoutForm.reset();

    // Обновление отображения товаров в заказе
    displayOrderItems();
  });
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  loadCart();

  setTimeout(() => {
    const logoModal = document.getElementById('logo-modal');
    if (logoModal) logoModal.style.display = 'flex';
  }, 500);

  if (document.getElementById('product-list')) {
    displayProducts(products);
  }
  if (document.getElementById('cart-items')) {
    console.log('Инициализация корзины на странице cart.html');
    displayCart();
  }
  if (document.getElementById('popular-product-list')) {
    const popularProducts = products.slice(0, 4);
    displayProducts(popularProducts);
  }
  if (document.getElementById('main-image')) {
    displayProductDetails();
  }
  if (document.getElementById('order-items')) {
    displayOrderItems();
    setupCheckoutForm();
  }

  setupCategoryFilters();
  setupSearch();

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formMessage = document.getElementById('form-message');
      if (formMessage) {
        formMessage.innerHTML = '<p class="text-success">Сообщение отправлено! Мы свяжемся с вами в ближайшее время.</p>';
      }
      contactForm.reset();
    });
  }
});