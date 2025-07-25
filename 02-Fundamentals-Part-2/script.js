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



// 箭頭函式
const calcAge3 = birthYear => 2037 - birthYear; // 箭頭函式，計算年齡並返回
const age3 = calcAge3(1991); // 呼叫箭頭函式，傳入1991年作為出生年份
console.log(age3); // 印出計算出的年齡

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear; // 計算年齡
    const retirementAge = 65; // 定義退休年齡
    // return retirementAge - age; // 返回距離退休的年數
    return `${firstName} retires in ${retirementAge - age} years.`; // 返回一個描述退休年數的字串
}
console.log(yearsUntilRetirement(1991, 'Anna')); // 呼叫函式並印出距離退休的年數
console.log(yearsUntilRetirement(1980, 'Bob')); 


function cutFruitPeices(fruit) {
    return fruit * 3; // 將水果切成四片並返回片數
}


function fruitProcessor(apples, oranges) {
    // 呼叫 cutFruitPeices 函式來切水果
    const applePieces = cutFruitPeices(apples); // 將蘋果切片
    const orangePieces = cutFruitPeices(oranges); // 將橘子切片
    const juice = `Juice with ${apples} apples and ${oranges} oranges, which is ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
// 呼叫 fruitProcessor 函式，傳入蘋果和橘子的數量
console.log(fruitProcessor(2, 3)); // 印出果汁描述字串



const calcAge = function (year) {
    return 2037 - year; // 計算年齡並返回
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`); // 返回一個描述退休年數的字串
        return retirement;
    } else {
        console.log(`${firstName} has already retired for ${Math.abs(retirement)} years.`); // 使用絕對值
        return -1; // 如果已經退休，返回-1
    }
}

console.log(yearsUntilRetirement(1991, 'Luis')); // 呼叫函式並印出距離退休的年數
console.log(yearsUntilRetirement(1950, 'Luis')); 



const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5)); // 印出平均值

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas); // 印出兩隊的平均分數

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins, scoreKoalas); // 檢查哪一隊獲勝

checkWinner(576, 111); // 測試另一組分數

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas); 



const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';
const friends = ['Michael', 'Steven', 'Peter']; // 使用陣列來儲存朋友的名字
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]); // 印出第一個朋友的名字
console.log(friends[2]); // 印出第三個朋友的名字

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Luis', 'Bob']; // 不可重新賦值給 friends 陣列

const firstName = 'Luis';
const luis = [firstName, 'Garcia', 2037 - 1991, 'teacher', friends];
console.log(luis);
console.log(luis.length);

// 練習
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages); // 印出計算出的年齡
*/

// 練習：陣列方法 - push() 和 pop() 類似堆疊的操作
// 添加方法：push() 在陣列末尾添加元素，pop() 從陣列末尾移除元素
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); // 在陣列末尾添加一個新朋友
console.log(friends);
console.log(newLength);

friends.unshift('John'); // 在陣列開頭添加一個新朋友
console.log(friends);

// 移除方法：pop() 從陣列末尾移除元素，shift() 從陣列開頭移除元素
friends.pop();
console.log(friends);

friends.shift(); // 從陣列開頭移除第一個朋友
console.log(friends);

console.log(friends.indexOf('Steven')); // 查找 'Steven' 在陣列中的索引
console.log(friends.indexOf('Bob')); // 查找 'Bob' 在陣列中的索引（不存在時返回 -1）
friends.push(23); // 在陣列末尾添加一個數字

console.log(friends.includes('Steven')); // 檢查 'Steven' 是否在陣列中
console.log(friends);
console.log(friends.includes(23)); // 檢查數字 23 是否在

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
} else {
    console.log('You do not have a friend called Steven');
} 