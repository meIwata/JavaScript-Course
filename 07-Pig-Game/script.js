// 示範：Pig Game
// https://pig-game-v2.netlify.app/

'use strict';
// 選取元素
const score0El = document.querySelector('#score--0'); // 可以用 querySelector，因為 id 是唯一的
const score1El = document.getElementById('score--1'); // 也可以用 getElementById，因為 id 是唯一的
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');



/* 初始化遊戲 */
score0El.textContent = 0; // 設定初始分數為 0
score1El.textContent = 0;
diceEl.classList.add('hidden'); // 隱藏骰子圖片

let currentScore = 0; // 當前玩家的暫時分數

/* 產生隨機骰子點數 */
btnRoll.addEventListener('click', () => {
    // 1. 產生隨機骰子點數
    const dice = Math.trunc(Math.random() * 6) + 1; // 產生 1~6 的隨機整數
    // console.log(`骰子點數: ${dice}`); // 在控制台顯示骰子點數

    // 2. 顯示骰子圖片
    diceEl.classList.remove('hidden'); // 顯示骰子圖片
    diceEl.src = `dice-${dice}.png`; // 使用src屬性來改變圖片來源，顯示對應點數的骰子圖片

    // 3. 判斷如果骰子點數是 1，則切換玩家
    if (dice !== 1) {
        // 如果骰子點數不是 1，則將點數加到當前玩家的暫時分數上
        currentScore += dice; // 將骰子點數加到當前玩家的暫時分數上
        current0El.textContent = currentScore;
    } else{
        // 如果骰子點數是 1，則切換玩家
    }
})