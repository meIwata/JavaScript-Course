'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],


    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
    }
};

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

const[i, , [j,k]] = nested;
console.log(i, j, k);

// 默認值
const [p =1,q=1,r=1] = [8, 9];
console.log(p, q, r); // r 為 undefined