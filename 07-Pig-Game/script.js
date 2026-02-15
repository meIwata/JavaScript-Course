// 示範：Pig Game
// https://pig-game-v2.netlify.app/

'use strict';
// 選取元素
const score0El = document.querySelector('#score--0'); // 可以用 querySelector，因為 id 是唯一的
const score1El = document.getElementById('score--1'); // 也可以用 getElementById，因為 id 是唯一的
const diceEl = document.querySelector('.dice');

/* 初始化遊戲 */
score0El.textContent = 0; // 設定初始分數為 0
score1El.textContent = 0;
diceEl.classList.add('hidden'); // 隱藏骰子圖片
