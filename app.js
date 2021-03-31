// lesson6
"use strict";

// задания 1 уровня

// <!-- Задание. Сделайте чтобы в src была картинка 2.jpg, для этого:
// 1. Найдите картинку, например с помощью querySelector
// 2. Измените атрибут src, например с помощью setAttribute -->
let img = document.querySelector('img');
img.setAttribute('src', 'images/2.jpg');

// <!-- Задание.
//     1. Сделайте всем элементам .product какой-нибудь фон, для этого:
//         1.1 Найдите все элементы с классом .product, например с помощью
//         querySelectorAll
//         1.2 Затем переберите эту коллекцию, например с помощью forEach,
//         у коллбэк-функции, передаваемой в forEach определите параметр,
//         назовите его например product
//         1.3 Чтобы менять стили обратитесь к параметру product и его свойству
//         style

//     2. Сделайте элементам .productName размер шрифта 24px, для этого:
//         2.1 Найдите все элементы с классом .productName, например с помощью
//         querySelectorAll
//         2.2 Затем переберите эту коллекцию, например с помощью forEach,
//         у коллбэк-функции, передаваемой в forEach определите параметр,
//         назовите его например name
//         2.3 Чтобы менять стили обратитесь к параметру name и его свойству
//         style-->
let products = document.querySelectorAll('.product');
products.forEach(function(product) {
    product.style.background = '#A9A9A9';
});

let productNames = document.querySelectorAll('.productName');
productNames.forEach(function(productName) {
    productName.style.fontSize = '24px';
});

// <!-- Задание. Найдите все дивы и добавьте им padding: 10px, для этого:
//     1. Найдите все дивы, например с помощью getElementsByTagName.
//     2. Затем с помощью цикла пройдитесь по этой коллекции, и обращаясь к
//     каждому элементу, обратитесь к его свойству style, а затем к свойству
//     padding. -->
let divs = document.getElementsByTagName('div');
for (let i = 0; i < divs.length; i++) {
    divs[i].style.padding = '10px';
};

// <!-- Задание. Вызовите функцию setTimeout и ей в качестве аргументов передайте:
//         1-аргумент. (это уже сделано) анонимную функцию, которая будет вызвана 
//         через определенный промежуток времени
//         2-аргумент. задержку в милисекундах, которая будет равняться 3 секундам
//         Сделайте чтобы в анонимной функции вызывалась функция alert со строкой
//         "message".-->
setTimeout(function() {
    alert('message');
}, 3000);

// <!-- 
//         Задание. Сделайте, чтобы у всех инпутов снизу был внешний отступ (margin-bottom).
//         1. Получите все инпуты, например с помощью querySelectorAll
//         2. Переберите полученную коллекцию например с помощью forEach
//             2.1 У функции-обработчика, которая будет передаваться в forEach определите
//             параметр input
//             2.2 Чтобы менять стили обращайтесь к свойству style у параметра input
//     -->
let inputs = document.querySelectorAll('input');
inputs.forEach(function(input) {
    input.style.marginBottom = '10px';
});

// <!-- 
// Задание. Инпуты идут один за другим, надо сделать чтобы после каждого инпута
// появился тег br, чтобы инпуты стали стоять один под другим. Для этого:
// 1. Получите все инпуты, например с помощью querySelectorAll.
// 2. Переберите их с помощью цикла или forEach, и после каждого инпута
// встявляйте тег br, например с помощью insertAdjacentHTML.
// -->
let inputs = document.querySelectorAll('input');
inputs.forEach(function(input) {
    input.insertAdjacentHTML('afterend', '<br>');
});


// задания 2 уровня


// <!-- Задание.
//     1. Сохраните в переменную ссылку на span, например с помощью querySelector.
//     2. Сохраните в переменную fromEl ссылку на input, например с помощью getElementById.
//     3. Элементу fromEl назначьте обработку события change, у функции обработчика
//     этого события должен быть параметр event.
//     4. Читайте что было написано в input'e с помощью event.target.value и пишите это
//     значение в span.-->
let span = document.querySelector('span');
let fromEl = document.querySelector('input');
fromEl.addEventListener('change', function(event) {
    span.textContent = event.target.value;
});
// <!-- Задание.
// 1. Сохраните в переменную btn ссылку на кнопку.
// 2. Сохраните в переменную msg ссылку на .message.
// 3. На btn назначьте обработку клика.
//     3.1 Внутри функции-обработчика сделайте чтобы у msg display становился block.
//     3.2 Для msg с помощью classList.add() добавьте классы animate__animated и
//     animate__fadeInLeftBig
// -->
let btn = document.querySelector('button');
let msg = document.querySelector('.message');
btn.addEventListener('click', function() {
    msg.style.display = 'block';
    msg.classList.add('animate__animated', 'animate__fadeInLeftBig');
});

// <!-- Задание. Используя заготовку, сделайте чтобы при наведении на вторую звезду
//     подсвечивались первая и вторая звезды. При наведени на третью звезду подсвечивались
//     первая, вторая и третья звезды, и т.д. 
//     mouseover - это событие срабатывает когда мы наводим на элемент.
//     mouseout - это событие срабатывает когда мы перестаем наводить на элемент.-->
let iElems = document.querySelectorAll('i');
iElems.forEach(function(i) {
    i.addEventListener('mouseover', function(event) {
        addGoldenClass(event.target);
    });
    i.addEventListener('mouseout', function(event) {
        removeGoldenClass(event.target);
    });
})

function addGoldenClass(i) {
    i.classList.add('golden');
    let previousElem = i.previousElementSibling;
    if (previousElem !== null && previousElem.tagName === 'I') {
        return addGoldenClass(previousElem);
    }
}

function removeGoldenClass(i) {
    i.classList.remove('golden');
    let previousElem = i.previousElementSibling;
    if (previousElem !== null && previousElem.tagName === 'I') {
        return removeGoldenClass(previousElem);
    }
}


// задания 3 уровня


// <!-- Задание. Надо сделать, чтобы по клику на крестик исчезало тот блок
//     с сообщением, в котором этот крестик находится. Для этого:
//     1. Получите все кнопки, например с помощью querySelectorAll 
//     2. Переберите полученную коллекцию, например с помощью forEach
//     2.1 Методу forEach передавайте callback-функцию с параметром button
//     3. Каждому button назначьте обработчик клика, с помощью addEventListener,
//     а самим обработчиком клика будет функция closeClickHandler (в коде ниже)
//     4. В функции closeClickHandler из объекта события event обратитесь
//     к currentTarget, затем обратитесь к родительскому узлу, затем к свойству
//     style, наконец сделайте display: none
//     -->
let buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.addEventListener('click', closeClickHandler);
});

function closeClickHandler(event) {
    event.currentTarget.parentNode.style.display = 'none';
};

// !-- Задание. Нужно чтобы при клике по кнопке блок .product в котором она
//     находится становился цвета lightgreen, а текст на кнопке стал "Добавлено",
//     для этого:
//     1. Найдите все кнопки, например с помощью querySelectorAll
//     2. Переберите полученную коллекцию кнопок, например с помощью forEach,
//     и каждой кнопке назначьте в качестве обработчика клика фукнцию
//     buttonClickHandler (увидите ее ниже в коде)
//     3. Когда функция buttonClickHandler будет срабатывать вы из объекта
//     события получаете элемент на котором произошло событие (свойство target),
//     затем получаете родителя кнопки по коротой кликнули (свойство parentNode),
//     затем обращаетесь к свойству style, а затем к свойству background и
//     ставите цвет lightgreen.
//     3.1 Также во время срабатывания функции buttonClickHandler из обекта
//     события (параметр event) вы получаете кнопку на которой произошло
//     событие (свойство target) и меняете у нее текст на "Добавлено".-->
let buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.addEventListener('click', buttonClickHandler);
});

function buttonClickHandler(event) {
    event.target.parentNode.style.background = 'lightgreen';
    event.target.textContent = 'Добавлено';
}
// <!-- 
//         Задание. Вам нужно проверять пусто ли в input'ах при отправке формы.
//         Если в инпуте пусто делаете ему красную рамку. Если хотя бы в одном
//         инпуте пусто форма не должна отправляться.
//         1. сохраните в переменную formEl ссылку на форму
//         2. сохраните в переменную ссылку на input#first
//         3. сохраните в переменную ссылку на input#second
//         4. на formEl назначьте обработку события отправки формы (submit),
//         у функции-обработчика объявите параметр event.
//             4.1 в функции-обработчике вы проверяете пусты ли input'ы, для этого
//             читайте у них свойство value
//             4.2 если input пустой тогда вы обращаетесь к его style.borderColor
//             и делаете его равным red
//             4.3 чтобы остановить отправку формы используйте event.preventDefault()
//      -->
let formEl = document.querySelector('form');
let firstInput = document.getElementById('first');
let secondInput = document.getElementById('second');

formEl.addEventListener('submit', function(event) {
    let firstInputEmpty = firstInput.value === '';
    let secondInputEmpty = secondInput.value === '';

    if (firstInputEmpty) {
        firstInput.style.borderColor = 'red';
    }
    if (secondInputEmpty) {
        secondInput.style.borderColor = 'red';
    }
    if (firstInputEmpty || secondInputEmpty) {
        event.preventDefault();
    }
});

// <!-- 
//     Задание. Сделайте, чтобы при прокрутке от верха экрана больше чем на 500px появлялся
//     блок #goToTop, а если меньше, то чтобы исчезал.
//     1. Сохраните в переменную goToTopEl ссылку на div#goToTop
//     2. Назначьте обработку события scroll для объекта window.
//     3. В функции-обработчике проверяйте величину window.pageYOffset если она больше
//     500, тогда goToTopEl надо показать, иначе скрыть.
//     4. Показывайте и скрывайте с помощью свойства display у объекта style.
//     -->
let goToTopEl = document.getElementById('goToTop');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 500) {
        goToTopEl.style.display = 'block';
    } else {
        goToTopEl.style.display = 'none';
    }
});

// <!-- Задание. Нужно через 3 секунды заменить все картинки loading.gif на картинки
//     из папки images.
//     1. Получите все картинки например с помощью querySelectorAll
//     2. Переберите эту коллекцию с помощью цикла for, в цикле каждой картинке
//     установите атрибут src (например с помощью setAttribute) равный 
//     "images/здесь_нужно_поставить_правильное_имя_файла".
//     3. Наконец весь код оберните в setTimeout, и выставите задержку 3 сек.
//     -->
setTimeout(function() {
    let images = document.querySelectorAll('img');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('src', `images/${i + 1}.jpg`);
    }
}, 3000);