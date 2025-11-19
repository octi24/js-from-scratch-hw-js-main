/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

let dice1; // your code
let dice2; // your code
let isWinningDouble; // your code
let count = 0;

while (count < 15) {
  dice1 = Math.floor(Math.random() * 6) + 1;
  dice2 = Math.floor(Math.random() * 6) + 1;
  console.log('Первый бросок: ' + dice1);
  console.log('Второй бросок: ' + dice2);
  console.log(dice1, dice2);
  if (
    (dice1 === 4 && dice2 === 4) ||
    (dice1 === 5 && dice2 === 5) ||
    (dice1 === 6 && dice2 === 6)
  ) {
    isWinningDouble = true;
    console.log(isWinningDouble);
    console.log('Выигрышный дубль!');
  } else {
    isWinningDouble = false;
    console.log(isWinningDouble);
    console.log('Не выигрышный дубль.');
  }
  count++;
}
/*
console.log('Первый бросок: ' + dice1)
console.log('Второй бросок: ' + dice2)
if (isWinningDouble) {
  console.log('Выигрышный дубль!')
} else {
  console.log('Не выигрышный дубль.')
}
*/
