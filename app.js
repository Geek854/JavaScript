// 1. С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10 включительно, чтобы результат выглядел так:  
// 0 – это ноль 
// 1 – нечетное число 
// 2 – четное число 
// 3 – нечетное число … 
// 10 – четное число  
// Для решения этой задачи используйте остаток от деления на 2, подробнее здесь https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

for (let a = 0; a < 11; a++) {
    if ((a == 0)) {
        console.log(a + "- это ноль");
    } else if ((a % 2) == 1) {
        console.log(a + "- нечетное число");
    } else if ((a % 2) == 0) {
        console.log(a + "- четное число");
    }
}

// 2. Выведите в консоль значения, указанные рядом с комментариями:
const post = {
    author: "John", //вывести этот текст             
    postId: 23,
    comments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число                     
            }
        },
        {
            userId: 5, //вывести это число                     
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст                     
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// 3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15 % , можете использовать метод forEach https: //mzl.la/1AOMMWX :   

const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
products.forEach(
    function(valuem) {
        valuem.price = valuem.price - (valuem.price / 100 * 15);
    }
)
console.log(products[0].id, products[0].price);
console.log(products[1].id, products[1].price);
console.log(products[2].id, products[2].price);


// 4. Перед вами находится массив с продуктами в интернет - магазине.Вам нужно:

//     1. Получить все товары, у которых есть фотографии, можете использовать метод filter https: //mzl.la/2qROQkT 

//     2. Отсортируйте товары по цене(от низкой цены к высокой), можете использовать метод sort https: //mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 или в дополнительных видео в материалах урока.  

const products = [{
        id: 3,
        price: 127,
        photos: ["1.jpg", "2.jpg", ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg"]
    },
    {
        id: 8,
        price: 78,
    },
];
let picture = products.filter(photo => "photos" in photo && photo.photos.length > 0);
console.log(picture);
let productsNew = products.sort(function(params1, params2) {
    return params1.price - params2.price
});
console.log(productsNew);


// 6.  Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
for (let x = "x"; x.length <= 20; x += "x") {
    console.log(x);
}