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

let scores, currentScore, activePlayer, playing; // 定義遊戲狀態變數

/* 初始化遊戲 */
const init = function () {
    scores = [0, 0]; // 玩家 1 和玩家 2 的總分數
    currentScore = 0; // 當前玩家的暫時分數
    activePlayer = 0; // 0 代表玩家 1，1 代表玩家 2
    playing = true; // 遊戲狀態，true 代表遊戲進行中，false 代表遊戲結束

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden'); // 隱藏骰子圖片
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};
init(); // 初始化遊戲狀態和 UI

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0; // 更新當前玩家的暫時分數顯示為 0
    activePlayer = activePlayer === 0 ? 1 : 0; // 切換玩家
    currentScore = 0; // 重置暫時分數

    // toggle 方法會自動檢查元素是否具有指定的 class，如果有就移除，沒有就添加，因此可以用來切換玩家的 active 狀態
    player0El.classList.toggle('player--active'); // 切換玩家 1 的 active 狀態
    player1El.classList.toggle('player--active'); // 切換玩家 2 的 active 狀態
};


/* 產生隨機骰子點數 */
btnRoll.addEventListener('click', () => {
    if (playing) {
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
            switchPlayer(); // 切換玩家
            /*
            // 如果骰子點數是 1，則切換玩家
            document.getElementById(`current--${activePlayer}`).textContent = 0; // 更新當前玩家的暫時分數顯示為 0
            activePlayer = activePlayer === 0 ? 1 : 0; // 切換玩家
            currentScore = 0; // 重置暫時分數

            // toggle 方法會自動檢查元素是否具有指定的 class，如果有就移除，沒有就添加，因此可以用來切換玩家的 active 狀態
            player0El.classList.toggle('player--active'); // 切換玩家 1 的 active 狀態
            player1El.classList.toggle('player--active'); // 切換玩家 2 的 active 狀態
             */
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        // console.log(`玩家 ${activePlayer} 按下 Hold 按鈕`); // 在控制台顯示當前玩家按下 Hold 按鈕
        // 1. 將當前玩家的暫時分數加到總分數上
        scores[activePlayer] += currentScore; // 將當前玩家的暫時分數加到總分數上
        // scores[1] = scores[1] + currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]; // 更新當前玩家的總分數顯示


        // 2. 檢查玩家的總分數是否 >= 100
        if (scores[activePlayer] >= 20) {
            // 如果是，則該玩家獲勝，遊戲結束
            playing = false;
            diceEl.classList.add('hidden'); // 隱藏骰子圖片
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner'); // 為獲勝玩家的區塊添加 winner class
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active'); // 移除獲勝玩家的 active class
        } else {
            // 如果不是，則切換玩家
            switchPlayer(); // 切換玩家
        }
    }
});


// btnNew.addEventListener('click', function () {
//     init(); // 重新初始化遊戲狀態和 UI
// })
btnNew.addEventListener('click', init); // 直接將 init 函數作為事件處理器，當按下 New Game 按鈕時會呼叫 init 函數來重新初始化遊戲狀態和 UI