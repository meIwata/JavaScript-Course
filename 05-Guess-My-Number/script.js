'use strict';

// console.log(document.querySelector('.message')); // querySelector()是選取器，類似CSS選擇器，會回傳第一個符合條件的元素
console.log(document.querySelector('.message').textContent); // textContent是元素的文本內容

document.querySelector('.message').textContent = '嘿嘿嘿!!!'; // 可以直接修改元素的文本內容

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
// document.querySelector('.guess')
document.querySelector('.guess').value = 23; // 可以直接修改輸入框的值
console.log(document.querySelector('.guess').value); // value是輸入框的值
