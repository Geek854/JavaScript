// lesson7
"use strict";

// 1 уровень

const products = {
    one: "один",
    two: "два",
    three: "три",
};

/* 
Задание.
Используя цикл for in переберите объект products, ведите в консоль
имя свойства, значение свойства.
*/

for (let prop in products) {
    console.log(prop);
    console.log(products[prop]);
}

// <!-- Задание. С помощью innerHTML очистите содержимое параграфа.-->
let p = document.querySelector('p');
p.innerHTML = '';

let totalString = "";

/* Задание.
Дописывайте в строку totalString с помощью цикла и конкатенации строки,
так, чтобы итоговое значение в totalString получилось: слово1слово2слово3
*/

for (let i = 1; i <= 3; i++) {
    totalString += `слово${i}`;
}
console.log(totalString);

// <!-- <a href="https://picsum.photos/200/300" target="_blank">ссылка</a> -->
//     <!-- 
//     Задание.
//     С помощью insertAdjacentHTML добавьте в body ссылку по примеру из комментария выше.
//     При создании разметки используйте шаблонный литерал. Данные для ссылки ниже.
//     -->
let url = "https://picsum.photos/200/300";
let targetAttr = "_blank";
let linkText = "ссылка";
document.body.insertAdjacentHTML('afterbegin', `<a href="${url}" target="${targetAttr}">${linkText}</a>`);

// 2 уровень

// <!-- Задание. Нужно при клике на кнопку выводить в консоль значения ее
// data- атрибутов.
// 1. Получите все кнопки например с помощью querySelectorAll
// 2. Переберите полученную коллекцию, например с помощью forEach
// 2.1 data- атрибуты можете читать например с помощью свойства dataset у каждой кнопки.-->
let buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        console.log(event.target.dataset.id);
        console.log(event.target.dataset.value);
    });
});

// <!-- <img src="https://picsum.photos/200/300?random=1" alt="pic1">
//      <img src="https://picsum.photos/200/300?random=2" alt="pic2">
//      <img src="https://picsum.photos/200/300?random=3" alt="pic3"> -->
// /* Задание.
// С помощью цилка for добавьте в body 6 картинок, по примеру тех, что закомментированы выше. Картинки вставляйте со помощью insertAdjacentHTML. При генерации разметки пользуйтесь шаблонным литералом. Куда должен вставляться счетчик цилка смотрите ниже:
//<img src="https://picsum.photos/200/300?random=${счетчик_цикла_здесь}" alt="pic${счетчик_цикла_здесь}"> */

for (let i = 0; i < 6; i++) {
    let markup = `<img src="https://picsum.photos/200/300?random=${i}" alt="pic${i}">`;
    document.body.insertAdjacentHTML('afterbegin', markup);
}

// <!-- Задание. Нужно чтобы при смещении ползунка в div менялся размер шрифта.
//     1. Получите ссылку на input.
//     2. Получите ссылку на div.
//     3. Input'у поставьте прослушивание события 'input';
//         3.1 У функции-обработчика определите параметр event.
//         3.2 Значение input'а читайте из event.target.value.-->
let inputel = document.querySelector('input');
let divEl = document.querySelector('div');
inputel.addEventListener('input', function(event) {
    divEl.style.fontSize = event.target.value + 'px';
});


// 3 уровень


const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/

let textEl = document.querySelector('.text');

let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(link) {
    link.addEventListener('click', clickHandler);
});

/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.
    changeText(event);
    changeActiveClass(event);
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(event) {
    document.querySelector('.active').classList.remove('active');
    event.target.classList.add('active');
}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(event) {
    switch (event.target.textContent) {
        case "Link 1":
            textEl.textContent = texts.text1;
            break;
        case "Link 2":
            textEl.textContent = texts.text2;
            break;
        case "Link 3":
            textEl.textContent = texts.text3;
            break;
    }
}

// <!-- 
//     Задание. Вам нужно чтобы при клике на кнопку появлялось сообщение .message
//     снизу экрана, в общем как сообщения вконтакте.
//     1. Аудио воспроизводите как здесь https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
//     2. Чтобы получить высоту .message, используйте свойство clientHeight
//     3. Чтобы анимировать перемещение .message используйте стиль transform
//     как здесь https://webref.ru/css/value/translatey
//     -->
let notification = new Audio('notification.mp3');
let message = document.querySelector('.message');
let button = document.querySelector('button');
button.addEventListener('click', function() {
    let messageHeight = message.clientHeight;
    message.style.transform = `translateY(-${40 + messageHeight}px)`;
    notification.play();
});



// 4 уровень


/* 
Разметка товара:

<div class="product">
    <div>${здесь_название_товара}</div>
    <img src="${здесь путь до картинки}" alt="">
    <div>${здесь_цена}</div>
    <a href="https://example.com/producs/${здесь_id_товара}">Подробнее</a>
</div>
*/

const products = {
    phones: [{
            id: 1,
            name: "Смартфон 1",
            price: "23,99 р.",
            imageUrl: "https://picsum.photos/seed/1/200",
        },
        {
            id: 2,
            name: "Смартфон 2",
            price: "11,99 р.",
            imageUrl: "https://picsum.photos/seed/2/200",
        },
        {
            id: 3,
            name: "Смартфон 3",
            price: "22,99 р.",
            imageUrl: "https://picsum.photos/seed/3/200",
        },
    ],

    tablets: [{
            id: 4,
            name: "Планшет 4",
            price: "99,99 р.",
            imageUrl: "https://picsum.photos/seed/4/200",
        },
        {
            id: 5,
            name: "Планшет 5",
            price: "44,99 р.",
            imageUrl: "https://picsum.photos/seed/5/200",
        },
    ],

    tv: [{
            id: 6,
            name: "Телевизор 6",
            price: "199,99 р.",
            imageUrl: "https://picsum.photos/seed/6/200",
        },
        {
            id: 7,
            name: "Телевизор 7",
            price: "244,99 р.",
            imageUrl: "https://picsum.photos/seed/7/200",
        },
        {
            id: 8,
            name: "Телевизор 8",
            price: "399,99 р.",
            imageUrl: "https://picsum.photos/seed/8/200",
        },
        {
            id: 9,
            name: "Телевизор 9",
            price: "444,99 р.",
            imageUrl: "https://picsum.photos/seed/9/200",
        },
    ],
};

const productsEl = document.querySelector(".products");
const buttons = document.querySelectorAll("button");
buttons.forEach(function(button) {
    button.addEventListener("click", clickHandler);
});

/**
 * Эта функция должна вызываться при клике по кнопкам.
 * @param {MouseEvent} event
 */
function clickHandler(event) {
    //вам нужно очищать .products
    productsEl.innerHTML = "";
    //в showCategory надо передать строку с типом категории, тип берите
    //из атрибута data-type у кнопки, по которой кликнули.
    showCategory(event.target.dataset.type);
}

/**
 * Сюда должно прилетать значение атрибута data-type у кнопки,
 * по которой кликнули.
 * @param {string} category 
 */
function showCategory(category) {
    const categoryProducts = products[category];
    let markupToProductsDiv = "";
    categoryProducts.forEach(function(product) {
        markupToProductsDiv += getProductMarkup(product);
    });
    productsEl.insertAdjacentHTML("afterbegin", markupToProductsDiv);
}

/**
 * @param {Object} product объект из массива phones, tablets или tv.
 * @param {number} product.id id продукта
 * @param {string} product.name название продукта
 * @param {string} product.price цена продукта
 * @param {string} product.imageUrl путь до картинки товара
 * @returns {string} html-разметка для товара
 */
function getProductMarkup(product) {
    return `
            <div class="product">
                <div>${product.name}</div>
                <img src="${product.imageUrl}" alt="">
                <div>${product.price}</div>
                <a href="https://example.com/producs/${product.id}">Подробнее</a>
            </div>
        `;
}

let div = document.querySelector('div');

function changeProgress(percent) {
    div.style.background = `linear-gradient(90deg, rgba(38,255,162,1) ${percent}%, rgba(255,255,255,1) ${percent}%)`;
}

/* 
Вам нужно в цикле создать отложенные вызовы с помощью setTimeout. Т.е. в цикле должны
быть вызовы функции setTimeout.
1. В условии цикла должно быть i <= 100, т.к. именно значение счетчика будем
передавать в changeProgress, а там процент не может превышать 100.
2. В setTimeout вторым параметром надо передавать задержку, используйте счетчик цикла,
можете также добавить какой-нибудь коэффициент, чтобы подобрать желаемую скорость
заполнения прогресс-бара.
*/
for (let i = 0; i <= 100; i++) {
    setTimeout(function() {
        changeProgress(i);
    }, i * 40);
};