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


// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;



const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!"; // 使用加號來連接字串
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`; // 使用模板字串（Template Literals）來創建字串
console.log(jonasNew);

console.log(`Just a regular string...`); // 使用反引號來創建普通字串
console.log(`String with \n\
    multiple \n\
    lines`
);
console.log(`String with
    multiple
    lines`); // 使用反引號來創建多行字串


const age = 19;
const isOldEnough = age >= 18;
if (isOldEnough) {
    console.log("You can start driving license 🚗");
} else {
    const yearsLeft = 19 - age;
    console.log(`You are too young. Wait another ${yearsLeft} years 😉`);
}

const birthYear = 2018;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century); 


// CHALLENGE #2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);


let result;
if (BMIMark > BMIJohn) {
    result = `Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`;
    console.log(result);
} else {
    result = `John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`;
    console.log(result);
}



// 轉換和強制類型轉換
const inputYear = '1991';
console.log(typeof(Number(inputYear)), typeof(inputYear)); 
console.log(Number(inputYear), inputYear); 
console.log(inputYear + 18); // 字串加數字會轉成字串
console.log(Number(inputYear) + 18); // 使用 Number() 轉換字串為數字
console.log(Number('Jonas')); // 無法轉換非數字字串，結果為 NaN
console.log(typeof NaN); // NaN 是一個特殊的數字類型，表示非數字
console.log(String(23), 12);

console.log('I am ' + 23 + ' years old'); // 字串加數字會轉成字串
console.log('23' - '10' - 3); // 字串減數字會轉成數字
console.log('23' + '10' + 3); // 字串加字串會連接成一個字串

let n = '1' + 1; // 11
n = n - 1; // 10
console.log(n);



// 五種falsy values(假值)是：0, '', undefined, null, NaN
// 所有其他值都是truthy values(真值)
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!"); // money 為 0，這是 falsy value，所以會執行 else 區塊
}

// let height; // 未賦值，這是 undefined
let height = 160; // 賦值為 160，這是 truthy value
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED"); // height 為 undefined，這是 falsy value，所以會執行 else 區塊
}



const age = '18';
if (age === 18) console.log("You just became an adult (strict)"); // === 是 嚴格等於 比較運算符
if (age == 18) console.log("You just became an adult (loose)"); // == 是 鬆散等於 比較運算符
console.log(18 === 18);
console.log(18 === 19);

// const favorite = prompt("What's your favorite number?"); // 使用 prompt() 來獲取使用者輸入
const favorite = Number(prompt("What's your favorite number?")); // 將輸入轉換為數字類型
console.log(favorite);
console.log(typeof favorite);
if (favorite === 23) { // 這裡的23是數字類型
    console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
    console.log("7 is also a cool number!");
} else {
    console.log("Number is not 23 or 7");
}
if (favorite !== 23) { // !== 是 不等於 比較運算符
    console.log("Why not 23?");
}

*/

const hasDriversLicense = true;
const hasGoodVision = true;
console.log(hasDriversLicense && hasGoodVision); // AND 運算符
console.log(hasDriversLicense || hasGoodVision); // OR 運算符
console.log(!hasDriversLicense);

// 使用邏輯運算符來決定是否可以開車
// if (hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}