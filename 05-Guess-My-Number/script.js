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
const secrectNumber = Math.trunc(Math.random() * 20) + 1; // Math.trunc()會去掉小數部分，Math.random() * 20會回傳一個0到20之間的隨機小數，包含0但不包含20，最後加1是為了讓範圍變成1到20
console.log(typeof secrectNumber, secrectNumber);

let score = 20; // 定義一個變數score，初始值為20，後續會根據猜測的結果進行修改

document.querySelector('.number').textContent = secrectNumber; // 顯示答案


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
    } else if (guess === secrectNumber) {
        document.querySelector('.message').textContent = '🎉 恭喜你猜對了!';
        score += 5; // 猜對了，分數加5
    } else if (guess < secrectNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 數字太小了!';
            score -= 1; // 猜錯了，分數減1
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 你輸了!';
            document.querySelector('.score').textContent = 0; // 分數歸零
        }

    } else if (guess > secrectNumber) {
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