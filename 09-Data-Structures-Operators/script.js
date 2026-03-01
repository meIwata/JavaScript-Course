'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        // [`day-${6}`]: {
        open: 0, // Open 24 hours
        // close: 24,
        close: 12 + 12,
    },
}

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 加強物件字面量的寫法，當屬性名稱和變數名稱相同時，可以直接寫變數名稱，這裡的openingHours就是一個變數，值是一個物件，當作restaurant物件的一個屬性
    openingHours,


    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
    },

    // 這裡的obj可以是一個或多個參數的物件，根據需要定義
    // orderDelivery: function (obj) {
    //     console.log(obj);
    // }

    // 直接在參數中解構賦值
    orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

if (restaurant.openingHours && restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon.open);
}
// 使用可選鏈（Optional Chaining）來簡化上面的程式碼，當restaurant.openingHours.mon存在時，才會繼續評估後面的open屬性，否則直接返回undefined
console.log(restaurant.openingHours.mon?.open);

// 範例
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
    // console.log(day);
    const open = restaurant.openingHours[day]?.open || 'closed'; // 如果restaurant.openingHours[day]存在，則返回其open屬性，否則返回'closed'
    console.log(`On ${day}, we open at ${open}`);
}

// 方法
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // 如果restaurant.order存在，則調用它並傳入參數0和1，否則返回'Method does not exist'
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); // 如果restaurant.orderRisotto存在，則調用它並傳入參數0和1，否則返回'Method does not exist'

// 陣列
const users = [{name: 'Jonas', email: 'hello@jonas.io'}];
console.log(users[0]?.name ?? 'User array empty'); // 如果users[0]存在，則返回其name屬性，否則返回'User array empty'

if (users.length > 0) {
    console.log(users[0].name);
} else {
    console.log('User array empty');
}

// if(restaurant.openingHours.fri){
//     console.log(restaurant.openingHours.fri.open);
// }

/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// 傳統的 for 迴圈，迭代陣列中的元素
// for(let i=0; i<menu.length; i++) {
//     console.log(`${menu[i]}`)
// }

// of 迭代陣列中的元素
for(const item of menu) {
    console.log(item);
}

// entries() 方法返回一個新的 Array Iterator 物件，包含陣列中每個索引的鍵/值對。這裡的item是一個陣列，第一個元素是索引，第二個元素是對應的值
for(const item of menu.entries()){
    // console.log(item);
    console.log(`${item[0] + 1}: ${item[1]}`);
}

// console.log([...menu.entries()]); // 展開運算符將menu.entries()中的元素展開成獨立的元素，然後再傳入console.log中
*/

///////////////////////////////////////
// Coding Challenge #1

/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1. 為每隊建立一個球員陣列（變數 players1 和 players2）。
const [players1, players2] = game.players;
console.log(players1, players2);

// 2. 任一球員陣列的第一位是守門員，其餘是場上球員。對於拜仁慕尼黑（team1），建立變數 gk 指定守門員姓名，並建立陣列 fieldPlayers 包含其餘 10 名場上球員。
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3. 建立陣列 allPlayers，包含兩隊所有球員（共 22 名）。
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. 比賽中拜仁（team1）使用了 3 名替補。建立新陣列 players1Final，包含原本 players1 的所有球員加上 Thiago、Coutinho 與 Perisic。
const playerFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(playerFinal);

// 5. 根據 game.odds 物件，為每個賠率建立變數：team1、draw 與 team2。
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

// 6. 寫一個函式 printGoals，接受任意數量的球員姓名（不是陣列），將每個姓名列印到主控台，並印出總進球數（傳入的姓名個數）。
const printGoals = function (...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
}
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7. 賠率較低的隊伍較可能獲勝。不要使用 if/else 或三元運算子，將哪隊較有可能獲勝列印到主控台。
team1 < team2 && console.log(`Team 1 is more likely to win!`);
team1 > team2 && console.log(`Team 2 is more likely to win!`);
*/
/*
const rest1 = {
    name: 'Capri',
    // numGuests: 20,
    numGuests: 0,
}

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
}

// 使用邏輯運算子 OR 來設定默認值
// rest1.numGuests = rest1.numGuests || 10; // 如果 rest1.numGuests 是 falsy value (例如 undefined)，則將 rest1.numGuests 設置為 10，否則保持原值
// rest1.numGuests ||= 10; // 跟上面一行的效果一樣
// rest2.numGuests = rest2.numGuests || 10; // 如果 rest2.numGuests 是 falsy value (例如 undefined)，則將 rest2.numGuests 設置為 10，否則保持原值
// rest2.numGuests ||= 10; // 跟上面一行的效果一樣

// nullish coalescing operator 合併運算子
rest1.numGuests ??= 10; // 如果 rest1.numGuests 是 null 或 undefined，則將 rest1.numGuests 設置為 10，否則保持原值
rest2.numGuests ??= 10; // 如果 rest2.numGuests 是 null 或 undefined，則將 rest2.numGuests 設置為 10，否則保持原值

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>'; // 如果 rest2.owner 是 truthy value，則將 rest2.owner 設置為 '<ANONYMOUS>'，否則保持原值

// Logical assignment operators 邏輯賦值運算子
rest1.owner &&= '<ANONYMOUS>'; // 如果 rest1.owner 是 truthy value，則將 rest1.owner 設置為 '<ANONYMOUS>'，否則保持原值
rest2.owner &&= '<ANONYMOUS>'; // 如果 rest2.owner 是 truthy value，則將 rest2.owner 設置為 '<ANONYMOUS>'，否則保持原值

console.log(rest1);
console.log(rest2);
*/
/*
restaurant.numGuests = 0;
const guest = restaurant.numGuest || 10;
console.log(guest);

// nullish coalescing operator 合併運算子，不包含''或是NOT
const guessCorrect = restaurant.numGuests ?? 10; // ?? 代表 nullish coalescing operator 合併運算子，當左邊的值為 null 或 undefined 時，才會返回右邊的值，否則返回左邊的值
console.log(guessCorrect);
*/

/*
console.log('-------OR--------');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuest = 23;
const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guests1);

const guest2 = restaurant.numGuest || 10;
console.log(guest2);

console.log('-------AND-------');
console.log(0 && 'Jonas'); // 0 是 falsy value，所以直接返回 0，不會繼續評估後面的 'Jonas'
console.log(7 && 'Jonas'); // 7 是 truthy value，所以繼續評估後面的 'Jonas'，最後返回 'Jonas'

console.log('Hello' && 23 && null && 'jonas'); // null 是 falsy value，所以直接返回 null，不會繼續評估後面的 'jonas'

if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

/*
// 1) 解構賦值
// 展開運算符，因為在等號的右邊，所以是展開運算符
const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);

// Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);


// 2) 功能
const add = function (...numbers) {
    // console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    };
    console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); // 展開運算符將x中的元素展開成獨立的元素，然後再傳入add函數中

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); // 這裡的'mushrooms'是mainIngredient，'onion'、'olives'、'spinach'是otherIngredients
restaurant.orderPizza('mushrooms'); // 這裡的'mushrooms'是mainIngredient，otherIngredients沒有值，默認為空陣列)

*/

/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr]; // ...arr 是展開運算符，將arr中的元素展開成獨立的元素，然後再放入newArr中
console.log(newArr);

console.log(...newArr); // 展開運算符將newArr中的元素展開成獨立的元素，然後再傳入console.log中
console.log(1, 2, 7, 8, 9); // 展開運算符將newArr中的元素展開成獨立的元素，然後再傳入console.log中

const newMenu1 = [restaurant.mainMenu, 'Gnocchi']; // 這樣會將restaurant.mainMenu作為一個元素放入newMenu中，導致newMenu變成一個二維陣列
console.log(newMenu1);

const newMenu2 = [...restaurant.mainMenu, 'Gnocchi']; // 這樣會將restaurant.mainMenu中的元素展開成獨立的元素，然後再放入newMenu中，導致newMenu變成一個一維陣列
console.log(newMenu2);

// 拷貝陣列
const mainMenuCopy = [...restaurant.mainMenu];

// 合併陣列
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// 迭代陣列: arrys, strings, maps, sets, but not objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.']; // 展開運算符將str中的每個字母展開成獨立的元素，然後再放入letters中，最後再加上空格和S.，形成一個新的陣列
console.log(letters);
console.log(...str); // 展開運算符將str中的每個字母展開成獨立的元素，然後再傳入console.log中
// console.log(`${...str} Schmedtmann`); // 這樣會報錯，因為展開運算符只能用在陣列中，不能用在字串中，這裡的str是一個字串，不是一個陣列，所以會報錯

const ingredients = [
    // prompt('Let\'s make pasta! Ingredient 1?'),
    // prompt('Ingredient 2?'),
    // prompt('Ingredient 3?')
];// 這裡的prompt會彈出一個對話框，讓用戶輸入三個食材，然後將這三個食材放入ingredients陣列中
console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // 這裡的ingredients[0]、ingredients[1]、ingredients[2]分別是用戶輸入的三個食材，然後將這三個食材傳入orderPasta函數中
restaurant.orderPasta(...ingredients); // 這裡的...ingredients是展開運算符，將ingredients陣列中的元素展開成獨立的元素，然後再傳入orderPasta函數中，這樣就不需要寫ingredients[0]、ingredients[1]、ingredients[2]了，直接寫...ingredients就可以了

// Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant}; // 這裡的...restaurant是展開運算符，將restaurant物件中的屬性展開成獨立的屬性，然後再放入restaurantCopy中，這樣就創建了一個新的物件，並且將restaurant物件中的屬性複製到新的物件中
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); // Ristorante Roma
console.log(restaurant.name); // Classico Italiano
*/
/*
// 呼叫restaurant物件中的orderDelivery方法，並傳入一個物件作為參數
restaurant.orderDelivery({
    // 裡面的屬性名稱必須和orderDelivery函數中定義的參數名稱相同，否則會undefined
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1
})


const {name, openingHours, categories} = restaurant; // 可以直接從物件中提取屬性(不必按照順序)，並賦值給變數
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant; // 可以給變數重新命名
console.log(restaurantName, hours, tags);

// 默認值
const {menu = [], starterMenu: starters = []} = restaurant; // 給沒有的屬性賦予默認值
console.log(menu, starters);

// Mutable variables 在解構賦值中改變變數的值
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14}; // 這裡的a和b是外部定義的變數，obj中的a和b是物件的屬性

({a, b} = obj); // 這裡的a和b是外部定義的變數，通過解構賦值將obj中的a和b的值賦給外部定義的a和b
console.log(a, b);

// Nested objects 嵌套物件
// const {fri} = openingHours;
// console.log(fri);

// const {fri: {open, close}} = openingHours;
// console.log(open, close);

const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);
*/
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// const [first, second] = restaurant.categories;
let [main, , secondary] = restaurant.categories; // 跳過中間的元素
console.log(main, secondary);

// 交換變數值
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);

// console.log(restaurant.order(2,0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// 嵌套解構
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// 默認值
const [p = 1, q, r] = [8, 9];
console.log(p, q, r); // r 沒有值，默認為 undefined
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // r沒有再賦值，默認為1
 */