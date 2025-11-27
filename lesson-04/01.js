/*
Напишите функцию `includesElement`, которая принимает массив и элемент, а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве. Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/

const array = [12, 14, 55, 667, 91];
const element = 54;

function includesElement(arr, el) {
  let indexElement = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      indexElement = true;
      break;
    }
  }
  return indexElement;
}
console.log(includesElement(array, element));
