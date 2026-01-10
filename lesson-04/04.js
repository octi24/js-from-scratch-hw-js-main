/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`_string`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

let str = 'Hello World';

function doubleEachCharacter(_string) {
  let doubleStr = '';
  for (let i = 0; i < _string.length; i++) {
    doubleStr = doubleStr + _string[i] + _string[i];
  }
  return doubleStr;
}
console.log(doubleEachCharacter(str));

/*
for (let char of 'hello') {
  console.log(char + char);
}
*/
