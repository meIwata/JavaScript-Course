'use strict'; // 使用嚴格模式
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


function logger(){
    console.log('My name is Luis');
}
// 呼叫方法
logger();
logger();
logger();

function fruitProcessor(apples, oranges) { // 定義了一個名為 fruitProcessor 的函數，有兩個參數
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice; // 將這個果汁描述字串作為結果傳回
}

const appleJuice = fruitProcessor(5, 0); // 呼叫這個函數，傳入5顆蘋果和0顆橘子
console.log(appleJuice);
console.log(fruitProcessor(5, 0)); // 直接呼叫函數並印出結果

const appleOrangeJuice = fruitProcessor(2, 4); // 呼叫這個函數，傳入2顆蘋果和4顆橘子
console.log(appleOrangeJuice); // 印出結果

const num = Number('23'); // 將字串 '23' 轉換為數字
console.log(num); // 印出數字 23

*/

// 函數聲明
const age1 = calcAge1(1991);
function calcAge1(birthYear) {
    return 2037 - birthYear; // 計算年齡並返回
}


// 函數表達式
// const age2 = calcAge2(1991); // 不同於函數聲明，函數表達式在被定義之前不能被呼叫
const calcAge2 = function (birthYear) {
    return 2037 - birthYear; // 計算年齡並返回
}
const age2 = calcAge2(1991);

console.log(age1, age2); // 印出計算出的年齡