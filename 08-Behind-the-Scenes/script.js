'use strict';

function calAge(birthYear) {
    const age = 2025 - birthYear;

    // console.log(firstName);

    // 內部函式
    function printAge() {
        // 區域變數
        let output = `名字: ${firstName}，今年${age}歲，出生於${birthYear}年`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 2000) {
            var millennial = true; // var 宣告的變數會被提升到函式作用域的頂部，並且在整個函式中都可用

            output = 'NEW OUTPUT';

            const firstName = 'Steven'; // 這裡的 firstName 是區域變數，與全域變數同名，但不會影響全域變數
            const str = `${firstName}，你是Millennial 千禧世代`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }

        }
        console.log(millennial);
        // console.log(add(2,3));
        console.log(output);
    }

    printAge();
    return age;
}

// 全域變數
const firstName = 'Jonas';
// console.log(`年紀: `, calAge(1991));
calAge(1991);