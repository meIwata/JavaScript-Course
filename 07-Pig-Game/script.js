// 示範：Pig Game
// https://pig-game-v2.netlify.app/

'use strict';
// 選取元素
const player0El = document.querySelector('.player--0'); // 玩家 1 的區塊
const player1El = document.querySelector('.player--1'); // 玩家 2 的區塊
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

const scores = [0, 0]; // 玩家 1 和玩家 2 的總分數
let currentScore = 0; // 當前玩家的暫時分數
let activePlayer = 0; // 0 代表玩家 1，1 代表玩家 2

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
        document.getElementById(`current--${activePlayer}`).textContent = currentScore; // 更新當前玩家的暫時分數顯示

    } else {
        // 如果骰子點數是 1，則切換玩家
        document.getElementById(`current--${activePlayer}`).textContent = 0; // 更新當前玩家的暫時分數顯示為 0
        activePlayer = activePlayer === 0? 1 : 0; // 切換玩家
        currentScore = 0; // 重置暫時分數

        // toggle 方法會自動檢查元素是否具有指定的 class，如果有就移除，沒有就添加，因此可以用來切換玩家的 active 狀態
        player0El.classList.toggle('player--active'); // 切換玩家 1 的 active 狀態
        player1El.classList.toggle('player--active'); // 切換玩家 2 的 active 狀態
    }
})