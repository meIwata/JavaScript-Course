'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const closeModal = function () {
    // 加上hidden的class:
    modal.classList.add('hidden'); // 加上hidden的class，隱藏modal
    overlay.classList.add('hidden'); // 加上hidden的class，隱藏overlay
};

const openModal = function () {
    // console.log('Button clicked');

    // 這裡有兩種方法可以顯示modal和overlay，第一種是移除hidden的class:
    modal.classList.remove('hidden'); // 移除hidden的class，只顯示modal
    overlay.classList.remove('hidden'); // 移除hidden的class，只顯示overlay

    //第二種是直接改變style屬性來顯示元素:
    // modal.style.display = 'block'; // 顯示modal
    // overlay.style.display = 'block'; // 顯示overlay
};

for (let i = 0; i < btnsOpenModal.length; i++) {
    // console.log(btnsOpenModal[i].textContent);
    btnsOpenModal[i].addEventListener('click', openModal);

    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
}
// 監聽鍵盤事件，當按下Esc鍵時關閉modal:
document.addEventListener('keydown', function (e) {
    // console.log('按下按鈕');
    // console.log(e.key);// e.key可以獲取按下的鍵的名稱
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) { // 如果按下的鍵是Escape，且moda
        // 如果modal沒有hidden的class，表示modal是顯示的狀態
        closeModal();
    }
});