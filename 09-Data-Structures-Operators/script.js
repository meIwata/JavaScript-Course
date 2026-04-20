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
/*
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

// Property NAMES 屬性名稱
const properties = Object.keys(openingHours);
console.log(properties);
// console.log(`We are open on ${properties.length} days`);
let openStr = `We are open on ${properties.length} days: `;

// for(const day of Object.keys(openingHours)){
for (const day of properties) {
    openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES 屬性值
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, {open, close}] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/*
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

*/
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

///////////////////////////////////////
// Coding Challenge #2

/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

///////////////////////////////////////
// Coding Challenge #2

/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

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

// 1.
for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for(const[team, odd] of Object.entries(game.odds)) {
    // console.log(team, odd);
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

 */

/*
// 集合Set 是一種新的資料結構，類似於陣列，但不允許重複的值，並且沒有索引。Set中的元素是唯一的，當你試圖添加一個已經存在的元素時，Set會自動忽略它。
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(orderSet);
console.log(new Set('Jonas'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear(); // 清空Set中的所有元素
console.log(orderSet);
// console.log(orderSet[0]); // Set沒有索引，所以無法通過索引訪問元素

// Set可以迭代，所以可以使用for...of迴圈來迭代Set中的元素，類似Java的增強型for迴圈
for(const order of orderSet){
    console.log(order);
}

// 範例
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // 先將staff陣列轉換為Set，這樣就會自動去除重複的元素，然後再使用展開運算符將Set中的元素展開成獨立的元素，最後再放入一個新的陣列中，這樣就得到了staffUnique陣列，其中包含了staff陣列中的唯一元素
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

console.log(new Set('jonasschmedtmann').size); // 這裡的'jonasschmedtmann'是一個字串，當我們將它轉換為Set時，Set會自動去除重複的字母，最後得到的Set中只包含了唯一的字母，所以size是7

 */


const italianFoods = new Set([
    'pasta',
    'gnocchi',
    'tomatoes',
    'olive oil',
    'garlic',
    'basil',
]);

const mexicanFoods = new Set([
    'tortillas',
    'beans',
    'rice',
    'tomatoes',
    'avocado',
    'garlic',
]);
/*
// 兩個集合的交集（intersection）是指同時存在於兩個集合中的元素。在這個例子中，italianFoods和mexicanFoods的交集是'tomatoes'和'garlic'，因為這兩個元素同時存在於兩個集合中。
const commonFoods = italianFoods.intersection(mexicanFoods);
// const commonFoods2 = mexicanFoods.intersection(italianFoods); // 這樣寫也是一樣的，因為交集是對稱的，無論哪個集合在前面，結果都是一樣的
console.log('交集: ', commonFoods);
console.log([...commonFoods]); // 展開運算符將commonFoods中的元素展開成獨立的元素，然後再傳入console.log中

// 兩個集合的聯集（union）是指存在於至少一個集合中的元素。在這個例子中，italianFoods和mexicanFoods的聯集是'pasta'、'gnocchi'、'tomatoes'、'olive oil'、'garlic'、'basil'、'tortillas'、'beans'、'rice'、'avocado'，因為這些元素至少存在於其中一個集合中。
const italianMexicanFoods = italianFoods.union(mexicanFoods);
console.log('聯集: ', italianMexicanFoods);
console.log([...new Set([...italianFoods, ...mexicanFoods])]);

// 兩個集合的差集（difference）是指存在於一個集合中但不存在於另一個集合中的元素。在這個例子中，italianFoods和mexicanFoods的差集是'pasta'、'gnocchi'、'olive oil'、'basil'，因為這些元素存在於italianFoods中但不存在於mexicanFoods中。
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('差集: ', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('差集: ', uniqueMexicanFoods);

// 兩個集合的對稱差集（symmetric difference）是指存在於其中一個集合中但不存在於另一個集合中的元素。在這個例子中，italianFoods和mexicanFoods的對稱差集是'pasta'、'gnocchi'、'olive oil'、'basil'、'tortillas'、'beans'、'rice'、'avocado'，因為這些元素存在於其中一個集合中但不存在於另一個集合中。
const uniqueItalianAndMexicanFoods = italianFoods.symmetricDifference(mexicanFoods);
console.log('對稱差集: ', uniqueItalianAndMexicanFoods);
 */

/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are open :D').set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear(); // 清空Map中的所有元素

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr)); // 這裡的arr是一個陣列，當我們將它作為Map的鍵時，Map會將它轉換為一個物件，這樣就無法通過原來的arr來訪問對應的值了，所以這裡會返回undefined
*/

/*
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct! 🎉'],
    [false, 'Try again!']
]);
console.log(question);
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}
const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/

// Coding Challenge #3

/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);

// 1.
// console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())]; // 展開運算符將gameEvents.values()中的元素展開成獨立的元素，然後再傳入Set中，這樣就會自動去除重複的元素，最後再使用展開運算符將Set中的元素展開成獨立的元素，然後再放入一個新的陣列中，這樣就得到了events陣列，其中包含了gameEvents.values()中的唯一元素
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
console.log(
    `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
    `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}