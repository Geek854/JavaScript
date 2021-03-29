// lesson5
"use strict";

// 1 поиск элементов на странице



// <!-- Задание. Используя поиск по id, получите ссылку с текстом link4
// и выведите ее в консоль. -->
let link = document.getElementById('four');
console.log(link);

// <!-- Задание. Используя поиск по имени класса, получите все элементы с классом .one
//     и выведите их в консоль. -->
let ones = document.getElementsByClassName('one');
console.log(ones);

// <!-- Задание. Используя поиск по селектору (метод querySelectorAll) найдите только те ссылки с
// классом.card - link, которые находятся в.card - body
// и выведите их в консоль. -->
let links = document.querySelectorAll('.card-body .card-link');
console.log(links);

// <!-- Задание. Используя поиск по селектору (метод querySelector) найдите div с атрибутом
// aria - valuenow = "50" и выведите его в консоль. -->
let div = document.querySelector('[aria-valuenow="50"]');
console.log(div);

// <!-- Задание. Выведите содержимое тега title в консоль. -->
console.log(document.title);




// 2 класс node




// <!-- Задание. Обратитесь к элементу с классом .mt-0 и получите его родителя - элемент с
// классом.media - body. -->
let mt0El = document.querySelector('.mt-0');
console.log(mt0El.parentNode);

// <!-- Задание. Добавьте в div c помощью appendChild следующую разметку:
//     <h3>hello world</h3> -->
let span = document.querySelector('span'); /*div заменил на  span во избежаниии конфликтов*/
let h3 = document.createElement('h3');
h3.innerText = 'hello world';
span.appendChild(h3);

// <!-- Задание. 
//     1. Найдите элемент с классом .btn-outline-warning и удалите его.
//     2. Аналогичным образом удалите элемент с классом .btn-outline-dark -->
let btnWarn = document.querySelector('.btn-outline-warning');
btnWarn.remove();
let btnDark = document.querySelector('.btn-outline-dark');
btnDark.remove();



// 3 работа с атрибутами



// <!-- Задание. Найдите кнопку с классом .btn-info и сделайте текст в кнопке: "Кнопка".-->
let btn = document.querySelector('.btn-info');
btn.innerText = 'Кнопка';

// <!-- Задание. Найдите тег ul. И добавьте ему класс one. -->
let ul = document.querySelector('ul');
ul.classList.toggle('one');
console.log(ul);

// <!-- Задание. Найдите элемент с классом .nav-link и используя метод toggle из свойства classList
// у элемента, добавьте или уберите класс.active. -->
let ul1 = document.querySelector('.nav-link');
ul1.classList.toggle('active');
console.log(ul1);

// <!-- Задание. Найдите элемент с классом .dropdown-menu и удалите этот класс, используя свойство
// classList у элемента, и метод remove(). -->
let menu = document.querySelector('.dropdown-menu');
menu.classList.remove('dropdown-menu');
console.log(menu);

// <!-- Задание. Выведите в консоль значение атрибутов data-dismiss
// и aria - label с помощью метода getAttribute. -->
let button = document.querySelector('button');
console.log(button.getAttribute('data-dismiss'));
console.log(button.getAttribute('aria-label'));

// <!-- Задание. Добавьте заголовку атрибут data-one="один" и атрибут
// data - two = "два" с помощью метода setAttribute. -->
let h1 = document.querySelector('h1');
h1.setAttribute('data-one', 'один');
h1.setAttribute('data-two', 'два');
console.log(h1);

// <!-- Задание. найдите заголовок с id="title" и замените значение id
// на что - то другое. -->
let heading = document.getElementById('title');
heading.id = 'title1';
console.log(heading);


// 4 обработка событий


// <!-- Задание. Отследите когда все теги будут добавлены на страницу (событие
// DOMContentLoaded) и выведите alert 'ом сообщение: "все теги добавлены на страницу". -->
document.addEventListener('DOMContentLoaded', function() {
    alert("все теги добавлены на страницу");
});

// <!-- Задание. Дождитесь когда все картинки загрузятся (событие load) и
//     покажите с помощью alert сообщение: "все картинки загружены". -->
window.addEventListener('load', function() {
    alert("все картинки загружены");
});

// <!-- Задание. Сделайте, чтобы по клику по кнопке с классом .btn появлялся
// alert('клик') -->
let btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
    alert('клик');
});

// <!-- Задание. Сделайте, чтобы при наведении на textarea в консоли
// появлялось сообщение: "вы навели на textarea" -->
let textarea = document.querySelector('textarea');
textarea.addEventListener('mouseover', function() {
    console.log("вы навели на textarea");
});