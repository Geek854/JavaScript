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




// задания 2 уровня



// 1 получение элементов и свойств

// <!-- Задание. 
// 1. Сохраните в переменную коллекцию с картинками.
// 2. Пробегитесь по этой коллекции с помощью цикла или forEach
// и выведите каждую картинку в консоль.Выведите в консоль только
// элементы коллекции, не нужно пытаться сделать, чтобы в консоли
// появилось изображение. -->
let images = document.querySelectorAll('img');
images.forEach(function(image) {
    console.log(image);
});

// <!-- Задание.
// 1. Сохраните в переменную коллекцию элементов с классом one. Для получения
// элементов используйте метод. getElementsByClassName() 
// 2. С помощью цикла переберите эту коллекцию и выведите в консоль название тега.
// -->
let ones = document.getElementsByClassName('one');
for (let i = 0; i < ones.length; i++) {
    console.log(ones[i].tagName);
}

// <!-- Задание.
//     1. Сохраните в переменную коллекцию с тегами h2, используйте метод getElementsByTagName()
//     2. Пробегитесь по этой коллекции с помощью цикла и выведите в консоль значение
//     атрибута class, используя свойство className.-->
let h2Elems = document.getElementsByTagName('h2');
for (let i = 0; i < h2Elems.length; i++) {
    console.log(h2Elems[i].className);
}

// <!-- Задание.
// 1. Сохраните в переменную тег div.
// 2. Создайте переменную classes, и в нее сохраните значение свойства classList.
// 3. C помощью forEach переберите classes и выведите каждый класс в консоль. -->
let div = document.querySelector('div');
let classes = div.classList;
classes.forEach(function(klass) {
    console.log(klass);
});

// <!-- Задание.
// 1. Вам нужно получить этот div.
// 2. Затем обратитесь к списку классов и с помощью метода contains()
// проверьте есть ли класс hidden у этого тега. -->
let div = document.querySelector('div');
console.log(div.classList.contains('hidden'));

// <!-- Задание.
// 1. Найдите все "карточки"с классом.card.
// 2. Проверьте есть ли у карточки класс hidden с помощью метода contains(),
//     и если есть, то удалите с помощью метода remove(). -->
let cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
    if (card.classList.contains('hidden')) {
        card.classList.remove('hidden');
    }
});

// <!-- Задание.
// 1. Получите все ссылки.
// 2. Проверьте, есть ли в ссылке текст "ссылка", и если нет, то добавьте. -->
for (let i = 0; i < document.links.length; i++) {
    if (document.links[i].innerText !== 'ссылка') {
        document.links[i].innerText = 'ссылка';
    }
}

// <!-- Задание.
// 1. Получите все теги b.
// 2. С помощью метода contains() из classList, проверьте, есть ли у тега
// класс sign, и если нет, то тогда добавьте с помощью метода add() -->
let bElems = document.querySelectorAll('b');
bElems.forEach(function(b) {
    if (!b.classList.contains('sign')) {
        b.classList.add('sign');
    }
});

// <!-- Задание.
// 1. Получите коллекцию тегов i.
// 2. Пробегитесь по этой коллекции и с помощью classList.toggle() сделайте,
//     чтобы где класс green есть, его не стало, а где нету, чтобы появился. -->
let iElems = document.querySelectorAll('i');
iElems.forEach(function(i) {
    i.classList.toggle('green');
});


// 2 обработка события

// <!-- Задание.
// 1. Получите кнопку и сохраните ее в переменную.
// 2. Назначьте кнопке обработку клика.
// 3. У функции - обработчика клика сделайте параметр event
// 4. При клике из event.target выведите в консоль: id, имя класса(используйте свойство className), текст на кнопке. -->
let button = document.querySelector('button');
button.addEventListener('click', function(event) {
    console.log(event.target.id, event.target.className, event.target.innerText);
});

// <!-- Задание.
// 1. Назначьте обработку клика по параграфу, у функции обработчика объявите
// параметр event.
// 2. При клике выведите в консоль event.target.classList
// 3. Переберите с помощью forEach event.target.classList и выведите каждый классв консоль. -->
let p = document.querySelector('p');
p.addEventListener('click', function(event) {
    console.log(event.target.classList);
    event.target.classList.forEach(function(klass) {
        console.log(klass);
    });
});

// <!-- Задание.
//     1. Сохраните ссылку на div в переменную
//     2. Назначьте div'у обработку клика, у функции-обработчика объявите параметр event.
//     3. При клике из event.target c помощью getAttribute() получите значениекаждого атрибута и выведите в консоль.-->
let div = document.querySelector('div');
div.addEventListener('click', function(event) {
    console.log(event.target.getAttribute('class'));
    console.log(event.target.getAttribute('id'));
    console.log(event.target.getAttribute('tabindex'));
    console.log(event.target.getAttribute('aria-labelledby'));
    console.log(event.target.getAttribute('aria-hidden'));
});

// <!-- Задание.
// 1. Сохраните в переменную ссылку на.product
// 2. Назначьте обработку клика по.product, у функции обработчика объявитепараметр event.
// 3. Сделайте, чтобы при клике содержимое.product поменялось на:
//     <div > Другой товар < /div> 
//     <div > Другое описание < /div>
// для этого вышеописанную разметку пишите в виде строки в innerHTML. -->
let product = document.querySelector('.product');
product.addEventListener('click', function(event) {
    event.target.innerHTML = "<div>Другой товар</div><div>Другое описание</div>";
});

// <!-- Задание. Назначьте обработчик клика по ul и при клике выводите в консоль
// элемент, на котором произошел клик, с помощью event.target, где event - это
// объект события, передаваемый в функцию - обработчик клика. -->
let ul = document.querySelector('ul');
ul.addEventListener('click', function(event) {
    console.log(event.target);
});


// 3 стили

// <!-- Задание. Сделайте с помощью javascript размер шрифта в кнопке 30px,
// а в textarea сделайте зеленый фон.Используйте свойство style у каждого
// из элементов. -->
let button = document.querySelector('button');
button.style.fontSize = '30px';
let textarea = document.querySelector('textarea');
textarea.style.background = 'green';