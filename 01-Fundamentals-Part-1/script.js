/*
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// 創造變量時使用小駝峰命名法第一個字母小寫，後續單詞首字母大寫。
// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);


let javascriptIsFun = true;
// console.log(javascriptIsFun);
console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof 'Apple');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const BIRTHYEAR = 1991; //常數不可再被重新賦值 
// BIRTHYEAR = 1990;

// const job; // 會報錯，常數必須在宣告時賦值

var job = 'programmer'; // var 可以重新賦值
job = 'teacher'; // 這是合法的

lastName = 'Schmedtmann'; // 這是合法的，因為 lastName 沒有使用 let 或 const 聲明
console.log(lastName); // 這會輸出 'Schmedtmann'



console.log(ageBrain, ageJonas); // 可以使用逗點來輸出多個值
console.log(ageBrain * 2, ageJonas / 10, 2 ** 3); // 可以使用算術運算符來計算值
//2**3 是 2 的 3 次方，等於 8

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName); // 使用加號來連接字串

// 賦值運算符
let x = 10 + 5; // 使用加號來計算數字
x += 10; // x = x + 10;
x *= 4;
x++;
x--;
console.log(x);

// 比較運算符
console.log(ageJonas > ageBrain); 
console.log(ageJonas <= 18); // >= 大於等於
*/

// 基礎數學運算
const now = 2025;

const ageBrain = now - 1991;
const ageJonas = now - 2018;
// const isFullAge = ageJonas >= 18; // 判斷是否成年
console.log(now - 1991 > now - 2018); // 比較兩個年齡
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y); 

const averageAge = (ageBrain + ageJonas) / 2;
console.log(ageBrain, ageJonas, averageAge);