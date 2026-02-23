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
    }
};

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