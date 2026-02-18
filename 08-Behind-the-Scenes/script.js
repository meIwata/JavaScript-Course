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