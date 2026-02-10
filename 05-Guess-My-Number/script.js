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

// 監聽按鈕的點擊事件
document.querySelector('.check').addEventListener('click', function () { // addEventListener()是監聽事件的方法，第一個參數是事件類型，第二個參數是事件處理函數
    // console.log(document.querySelector('.guess').value);
    // document.querySelector('.message').textContent = '嘿嘿嘿!!!';

    // 另一種寫法，存在變數中，方便後續使用
    // const guess = document.querySelector('.guess').value; // 取得輸入框的值
    const guess = Number(document.querySelector('.guess').value); // 轉換為數字類型
    console.log(guess, typeof guess); // 輸出輸入框的值和類型，預設是字串

    // 判斷輸入的值是否為空或非數字
    if (!guess) { // !guess表示guess為假值，空字串、0、null、undefined都會被視為假值
        document.querySelector('.message').textContent = '⛔ 沒有輸入任何數字';
    }
});