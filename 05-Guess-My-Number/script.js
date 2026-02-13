'use strict';

/*
// console.log(document.querySelector('.message')); // querySelector()是選取器，類似CSS選擇器，會回傳第一個符合條件的元素
console.log(document.querySelector('.message').textContent); // textContent是元素的文本內容

document.querySelector('.message').textContent = '嘿嘿嘿!!!'; // 可以直接修改元素的文本內容

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
// document.querySelector('.guess')
document.querySelector('.guess').value = 23; // 可以直接修改輸入框的值
console.log(document.querySelector('.guess').value); // value是輸入框的值
*/

// const number = Math.random(); // Math.random()會回傳一個0到1之間的隨機小數，包含0但不包含1
let secrectNumber = Math.trunc(Math.random() * 20) + 1; // Math.trunc()會去掉小數部分，Math.random() * 20會回傳一個0到20之間的隨機小數，包含0但不包含20，最後加1是為了讓範圍變成1到20
console.log(typeof secrectNumber, secrectNumber);

let score = 20; // 定義一個變數score，初始值為20，後續會根據猜測的結果進行修改
let highscore = 0; // 定義一個變數highscore，初始值為0，後續會根據猜測的結果進行修改


// 監聽按鈕的點擊事件
document.querySelector('.check').addEventListener('click', function () { // addEventListener()是監聽事件的方法，第一個參數是事件類型，第二個參數是事件處理函數
    // console.log(document.querySelector('.guess').value);
    // document.querySelector('.message').textContent = '嘿嘿嘿!!!';

    // 另一種寫法，存在變數中，方便後續使用
    // const guess = document.querySelector('.guess').value; // 取得輸入框的值
    const guess = Number(document.querySelector('.guess').value); // 轉換為數字類型
    console.log(typeof guess, guess); // 輸出輸入框的值和類型，預設是字串

    // 判斷輸入的值是否為空或非數字
    if (!guess) { // !guess表示guess為假值，空字串、0、null、undefined都會被視為假值
        document.querySelector('.message').textContent = '⛔ 沒有輸入任何數字';
    } else if (guess === secrectNumber) { // 猜對了
        document.querySelector('.message').textContent = '🎉 恭喜你猜對了!';
        document.querySelector('.number').textContent = secrectNumber; // 顯示答案
        // 修改樣式，當猜對時，背景變綠色，數字框變大
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score; // 更新最高分數
            document.querySelector('.highscore').textContent = highscore; // 顯示最高分數
        }

    } else if (guess < secrectNumber) { // 猜小了
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 數字太小了!';
            score -= 1; // 猜錯了，分數減1
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 你輸了!';
            document.querySelector('.score').textContent = 0; // 分數歸零
        }
    } else if (guess > secrectNumber) { // 猜大了
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 數字太大了!';
            score -= 1; // 猜錯了，分數減1
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 你輸了!';
            document.querySelector('.score').textContent = 0; // 分數歸零
        }
    }
});

///////////////////////////////////////
// Coding Challenge #1

/*
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secrectNumber = Math.trunc(Math.random() * 20) + 1; // 重新生成一個新的隨機數字
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})

