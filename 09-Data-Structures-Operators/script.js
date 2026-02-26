'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        }
    },


    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
    },

    // 這裡的obj可以是一個或多個參數的物件，根據需要定義
    // orderDelivery: function (obj) {
    //     console.log(obj);
    // }

    // 直接在參數中解構賦值
    orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

console.log('---------------');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuest = 23;
const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guests1);

const guest2 = restaurant.numGuest || 10;
console.log(guest2);

console.log('-------AND-------');
console.log(0 && 'Jonas'); // 0 是 falsy value，所以直接返回 0，不會繼續評估後面的 'Jonas'
console.log(7 && 'Jonas'); // 7 是 truthy value，所以繼續評估後面的 'Jonas'，最後返回 'Jonas'

console.log('Hello' && 23 && null && 'jonas'); // null 是 falsy value，所以直接返回 null，不會繼續評估後面的 'jonas'

if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
/*
// 1) 解構賦值
// 展開運算符，因為在等號的右邊，所以是展開運算符
const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);

// Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);


// 2) 功能
const add = function (...numbers) {
    // console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    };
    console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); // 展開運算符將x中的元素展開成獨立的元素，然後再傳入add函數中

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); // 這裡的'mushrooms'是mainIngredient，'onion'、'olives'、'spinach'是otherIngredients
restaurant.orderPizza('mushrooms'); // 這裡的'mushrooms'是mainIngredient，otherIngredients沒有值，默認為空陣列)

*/

/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr]; // ...arr 是展開運算符，將arr中的元素展開成獨立的元素，然後再放入newArr中
console.log(newArr);

console.log(...newArr); // 展開運算符將newArr中的元素展開成獨立的元素，然後再傳入console.log中
console.log(1, 2, 7, 8, 9); // 展開運算符將newArr中的元素展開成獨立的元素，然後再傳入console.log中

const newMenu1 = [restaurant.mainMenu, 'Gnocchi']; // 這樣會將restaurant.mainMenu作為一個元素放入newMenu中，導致newMenu變成一個二維陣列
console.log(newMenu1);

const newMenu2 = [...restaurant.mainMenu, 'Gnocchi']; // 這樣會將restaurant.mainMenu中的元素展開成獨立的元素，然後再放入newMenu中，導致newMenu變成一個一維陣列
console.log(newMenu2);

// 拷貝陣列
const mainMenuCopy = [...restaurant.mainMenu];

// 合併陣列
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// 迭代陣列: arrys, strings, maps, sets, but not objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.']; // 展開運算符將str中的每個字母展開成獨立的元素，然後再放入letters中，最後再加上空格和S.，形成一個新的陣列
console.log(letters);
console.log(...str); // 展開運算符將str中的每個字母展開成獨立的元素，然後再傳入console.log中
// console.log(`${...str} Schmedtmann`); // 這樣會報錯，因為展開運算符只能用在陣列中，不能用在字串中，這裡的str是一個字串，不是一個陣列，所以會報錯

const ingredients = [
    // prompt('Let\'s make pasta! Ingredient 1?'),
    // prompt('Ingredient 2?'),
    // prompt('Ingredient 3?')
];// 這裡的prompt會彈出一個對話框，讓用戶輸入三個食材，然後將這三個食材放入ingredients陣列中
console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // 這裡的ingredients[0]、ingredients[1]、ingredients[2]分別是用戶輸入的三個食材，然後將這三個食材傳入orderPasta函數中
restaurant.orderPasta(...ingredients); // 這裡的...ingredients是展開運算符，將ingredients陣列中的元素展開成獨立的元素，然後再傳入orderPasta函數中，這樣就不需要寫ingredients[0]、ingredients[1]、ingredients[2]了，直接寫...ingredients就可以了

// Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant}; // 這裡的...restaurant是展開運算符，將restaurant物件中的屬性展開成獨立的屬性，然後再放入restaurantCopy中，這樣就創建了一個新的物件，並且將restaurant物件中的屬性複製到新的物件中
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); // Ristorante Roma
console.log(restaurant.name); // Classico Italiano
*/
/*
// 呼叫restaurant物件中的orderDelivery方法，並傳入一個物件作為參數
restaurant.orderDelivery({
    // 裡面的屬性名稱必須和orderDelivery函數中定義的參數名稱相同，否則會undefined
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1
})


const {name, openingHours, categories} = restaurant; // 可以直接從物件中提取屬性(不必按照順序)，並賦值給變數
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant; // 可以給變數重新命名
console.log(restaurantName, hours, tags);

// 默認值
const {menu = [], starterMenu: starters = []} = restaurant; // 給沒有的屬性賦予默認值
console.log(menu, starters);

// Mutable variables 在解構賦值中改變變數的值
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14}; // 這裡的a和b是外部定義的變數，obj中的a和b是物件的屬性

({a, b} = obj); // 這裡的a和b是外部定義的變數，通過解構賦值將obj中的a和b的值賦給外部定義的a和b
console.log(a, b);

// Nested objects 嵌套物件
// const {fri} = openingHours;
// console.log(fri);

// const {fri: {open, close}} = openingHours;
// console.log(open, close);

const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);
*/
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// const [first, second] = restaurant.categories;
let [main, , secondary] = restaurant.categories; // 跳過中間的元素
console.log(main, secondary);

// 交換變數值
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);

// console.log(restaurant.order(2,0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// 嵌套解構
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// 默認值
const [p = 1, q, r] = [8, 9];
console.log(p, q, r); // r 沒有值，默認為 undefined
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // r沒有再賦值，默認為1
 */