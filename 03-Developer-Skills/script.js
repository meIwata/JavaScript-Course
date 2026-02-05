// https://github.com/jonasschmedtmann/complete-javascript-course/tree/master/03-Developer-Skills
// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
    let max = temps[0]; // 假設第一個值是最大值
    let min = temps[temps.length - 1];
    for (let i = 0; i < temps.length; i++) {
        const currentTemp = temps[i];
        if (currentTemp > max) {
            max = currentTemp; // 更新最大值
        }
        if (currentTemp < min) {
            min = currentTemp; // 更新最小值
        }
    }
    console.log('Max temperature:', max, 'Min temperature:', min);
    return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log('Temperature amplitude:', amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temperatures

// 1) Understanding the problem
// - With 2 arrays, should we implement the same functionality twice? No! Just merge two arrays


const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2); // 合併兩個陣列
    console.log(temps);
    let max = temps[0]; // 假設第一個值是最大值
    let min = temps[temps.length - 1];
    for (let i = 0; i < temps.length; i++) {
        const currentTemp = temps[i];
        if (currentTemp > max) {
            max = currentTemp; // 更新最大值
        }
        if (currentTemp < min) {
            min = currentTemp; // 更新最小值
        }
    }
    console.log('Max temperature:', max, 'Min temperature:', min);
    return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 2]);
console.log('Temperature amplitude:', amplitudeNew);
 */

/*
const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        // value: prompt('Degrees celsius:'), // prompt 回傳的值是字串
        // value: Number(prompt('Degrees celsius:')), // 使用 Number() 將字串轉為數字
        value: 10
    }
    console.log(measurement);
    console.table(measurement); // 以表格形式顯示物件
    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
}

console.log('Kelvin value:', measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
    const temps = t1.concat(t2); // 合併兩個陣列
    console.log(temps);
    let max = temps[0]; // 假設第一個值是最大值
    let min = temps[temps.length - 1];
    for (let i = 0; i < temps.length; i++) {
        const currentTemp = temps[i];
        if (currentTemp > max) {
            max = currentTemp; // 更新最大值
        }
        if (currentTemp < min) {
            min = currentTemp; // 更新最小值
        }
    }
    console.log('Max temperature:', max, 'Min temperature:', min);
    return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log('Temperature amplitude:', amplitudeBug);
 */

// Challenge 1
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// console.log(`...${data1[0]}ºC in 1 days ... ${data1[1]}ºC in 2 days ... ${data1[2]}ºC in 3 days ...`);

const printForecast = function (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str = str + `${arr[i]}ºC in ${i + 1} days ... `;
    }
    console.log('...' + str);
}
printForecast(data1);
*/

// Coding Challenge #2 With AI

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/
const workHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const analyzeWorkHours = function (hours) {
    // 1. Total hours worked
    let totalHours = 0;
    for (let i = 0; i < hours.length; i++) {
        totalHours += hours[i];
    }
    console.log(`1. Total hours worked: ${totalHours}`);

    // 2. Average daily hours
    // console.log(`workHours.length: ${workHours.length}`);
    const averageHours = totalHours / hours.length;
    console.log(`2. Average daily hours: ${averageHours}`);

    // 3. The day with the most hours worked
    let maxHours = hours[0];
    let maxDay = 1;
    for (let i = 1; i < hours.length; i++) {
        if (hours[i] > maxHours) {
            maxHours = hours[i];
            maxDay = i + 1; // days are 1-indexed
        }
    }
    console.log(`3. The day with the most hours worked: Day ${maxDay} with ${maxHours} hours`);

    // 4. Number of days worked
    let daysWorked = 0;
    for (let i = 0; i < hours.length; i++) {
        if (hours[i] > 0) {
            daysWorked++;
        }
    }
    console.log(`4. Number of days worked: ${daysWorked}`);

    // 5. Whether the week was full-time (worked 35 hours or more)
    const isFullTimeText = totalHours >= 35 ? 'worked full-time' : 'did not work full-time';
    console.log('5. Whether the week was full-time: ' + isFullTimeText);
}
analyzeWorkHours(workHours);