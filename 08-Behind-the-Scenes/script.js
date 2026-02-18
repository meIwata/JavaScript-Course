'use strict';
/*
function calAge(birthYear) {
    const age = 2025 - birthYear;

    // console.log(firstName);

    // 內部函式
    function printAge() {
        // 區域變數
        let output = `名字: ${firstName}，今年${age}歲，出生於${birthYear}年`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 2000) {
            var millennial = true; // var 宣告的變數會被提升到函式作用域的頂部，並且在整個函式中都可用

            output = 'NEW OUTPUT';

            const firstName = 'Steven'; // 這裡的 firstName 是區域變數，與全域變數同名，但不會影響全域變數
            const str = `${firstName}，你是Millennial 千禧世代`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }

        }
        console.log(millennial);
        // console.log(add(2,3));
        console.log(output);
    }

    printAge();
    return age;
}

// 全域變數
const firstName = 'Jonas';
// console.log(`年紀: `, calAge(1991));
calAge(1991);
*/


/*
// 變數提升
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas'; // var 宣告的變數會被提升到全域作用域的頂部，並且在整個程式中都可用，但在宣告之前使用會得到 undefined
let job = 'teacher'; // let 宣告的變數不會被提升，並且在宣告之前使用會得到 ReferenceError
const year = 1991; // const 宣告的變數不會被提升，並且在宣告之前使用會得到 ReferenceError，並且必須在宣告時初始化

// 函式提升
console.log(addDecl(2, 3)); // 會得到 5，因為函式宣告會被提升到全域作用域的頂部，並且在整個程式中都可用
// console.log(addExpr(2, 3)); // 函式表達式不會被提升，因為它是變數宣告的一部分，而變數宣告不會被提升，所以在宣告之前使用會得到 ReferenceError
console.log(addArrow);

//console.log(addArrow(2, 3)); // 箭頭函式不會被提升，因為它是變數宣告的一部分，而變數宣告不會被提升，所以在宣告之前使用會得到 ReferenceError
function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

var addArrow = (a, b) => a + b;

// 範例
console.log(numProducts);

if (!numProducts) deleteShoppingCart();
var numProducts = 10;


function deleteShoppingCart() {
    console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // var 宣告的變數會成為全域物件 window 的屬性，所以 x === window.x 會得到 true
console.log(y === window.y); // let 宣告的變數不會成為全域物件 window 的屬性，所以 y === window.y 會得到 false
console.log(z === window.z); // const 宣告的變數不會成為全域物件 window 的屬性，所以 z === window.z 會得到 false
*/


/*
// console.log(this); // 在全域作用域中，this 會指向全域物件 window
const calcAge = function (birthYear) {
    console.log(2025 - birthYear);
    console.log(this); // 在一般函式中，this 會指向 undefined（在嚴格模式下），或者指向全域物件 window（在非嚴格模式下）
}
calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2025 - birthYear);
    console.log(this); // 在箭頭函式中，this 會繼承自外部作用域，所以在這裡 this 會指向全域物件 window
}
calcAgeArrow(1991);

// 在物件方法中，this 會指向呼叫該方法的物件
const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this); // 在物件方法中，this 會指向呼叫該方法的物件，所以在這裡 this 會指向 jonas 物件
        console.log(2037 - this.year); // 指向 jonas 物件的 year 屬性
    }
}
jonas.calcAge();

const matilda= {
    year: 2017
}
matilda.calcAge = jonas.calcAge; // 方法借用，將 jonas 的 calcAge 方法賦值給 matilda 的 calcAge 屬性
matilda.calcAge(); // 呼叫 matilda 的 calcAge 方法，這裡 this 會指向 matilda 物件，所以在這裡 this.year 會指向 matilda 物件的 year 屬性

const f = jonas.calcAge;
f();
 */

// var firstName = 'Matilda';

const jonas = {
    // 屬性
    firstName: 'Jonas',
    year: 1991,

    // 方法
    calcAge: function () {
        // console.log(this); // 在物件方法中，this 會指向呼叫該方法的物件，所以在這裡 this 會指向 jonas 物件
        console.log(2037 - this.year); // 指向 jonas 物件的 year 屬性

        // 方法一:
        // const self = this; // 在 calcAge 方法中，this 會指向 jonas 物件，所以我們將 this 賦值給 self 變數，這樣在內部函式中就可以使用 self 來指向 jonas 物件
        // const isMillennial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 2000);
        // }

        // 方法二:
        const isMillennial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 2000);
        }
        isMillennial();
    },
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    }
}
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
    console.log(arguments); // 在一般函式中，arguments 會指向呼叫該函式時傳入的參數，所以在這裡 arguments 會是一個類陣列物件，包含了傳入的參數 a 和 b
    return a + b;
}

addExpr(2, 5);
addExpr(2, 5, 8, 12); // 即使傳入了更多的參數，arguments 仍然會包含所有傳入的參數


// 箭頭函式沒有自己的 arguments 物件，所以在箭頭函式中使用 arguments 會得到 ReferenceError，因為 arguments 是在函式作用域中定義的，而箭頭函式沒有自己的作用域，所以無法訪問 arguments 物件
var addArrow = (a, b) => {
    console.log(arguments); // 在箭頭函式中，arguments 不會被定義，因為箭頭函式沒有自己的 arguments 物件，所以在這裡使用 arguments 會得到 ReferenceError
    return a + b;
}
addArrow(2, 5, 8);