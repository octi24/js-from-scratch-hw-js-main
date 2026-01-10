/*
Напишите свою версию метода `filter`.
Ваша задача — создать функцию `filter`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна принимать два параметра:

- `element` (текущий элемент массива)
- `index` (индекс текущего элемента)

Функция `filter` должна возвращать новый массив, содержащий только те элементы `array`, для которых `callback` возвращает `true`.
*/

/* Пример использования:
const numbers = [1, 2, 3, 4, 5]

const oddNumbers = filter(numbers, (element, index) => {
  return element % 2 !== 0
});

console.log(oddNumbers) // Должен вывести: [1, 3, 5]
*/

const numbers = [1, 2, 3, 4, 5];

const isCallbackFunc = (element, index) => element % 2 !== 0;

const filter = (array, callback) => {
  const newNumbers = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      newNumbers.push(array[i]);
      // console.log(array.indexOf(array[i]));
    }
  }
  return newNumbers;
};

const oddNumbers = filter(numbers, isCallbackFunc);
console.log(oddNumbers);

// В этом упражнении вы создадите функцию, которая принимает список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.
{
  const arr1 = [1, 2, 'a', 'b'];
  const arr2 = [1, 'a', 'b', 0, 15];
  const arr3 = [1, 2, 'aasf', '1', '123', 123];

  function filter_list(l) {
    // Return a new array with the strings filtered out
    const newArr = [];

    for (let i = 0; i < l.length; i++) {
      if (typeof l[i] !== 'string') {
        newArr.push(l[i]);
      }
    }
    return newArr;
  }

  const filterList = filter_list(arr3);
  console.log(filterList);
}

// Рассмотрим массив/список овец, в котором некоторые овцы могут отсутствовать на своем месте. Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (значение true означает наличие).
{
  const sheeps = [
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true
  ];

  function countSheeps(sheep) {
    const count = sheep.filter((element) => element);
    return count.length;
    // return sheep.filter(Boolean).length;
  }
  console.log(countSheeps(sheeps));
}

// У вас есть приложение для группового чата, но кто находится в сети? Вы хотите показать своим пользователям, кто из их друзей находится в Сети и доступен для общения! На основе входных данных массива объектов, содержащих имена пользователей, статус и время с момента последней активности (в минутах), создайте функцию для определения того, кто находится online, offline and away. Если кто-то находитсяonline но его lastActivity была более 10 минут назадaway.
{
  const data = [
    {
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22
    },
    {
      username: 'Bob',
      status: 'online',
      lastActivity: 104
    }
  ];

  const whosOnline = (friends) => {
    // Your code here...
    const result = {};

    for (const friend of friends) {
      let statusKey;

      if (friend.status === 'online') {
        statusKey = friend.lastActivity > 10 ? 'away' : 'online';
      } else {
        statusKey = 'offline';
      }

      if (!result[statusKey]) {
        result[statusKey] = [];
      }
      result[statusKey].push(friend.username);
    }

    return result;
  };

  console.log(whosOnline(data));
}

// Вам будет предоставлен non-empty строка. Ваша задача - вернуть среднийе символы строки. Если длина строки нечетная, верните средний символ. Если длина строки четная, верните 2 средних символа.
{
  const word = 'testing';

  function getMiddle(s) {
    //Code goes here!
    let middle = Math.floor(s.length / 2);

    if (s.length % 2 === 0) {
      return s.slice(middle - 1, middle + 1);
    } else {
      return s.slice(middle, middle + 1);
    }
  }
  console.log(getMiddle(word));
}
