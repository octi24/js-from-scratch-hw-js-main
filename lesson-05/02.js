/*
Напишите функцию `updateGallery`, которая будет обновлять информацию о произведениях искусства в виртуальной галерее. Функция должна принимать три параметра:

- объект галереи
- название произведения (ключ)
- новое значение

Если произведение с таким названием уже есть в галерее, его значение должно быть обновлено. Если произведения нет, оно должно быть добавлено в объект галерею.

Пример использования функции:

const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch'
}

updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506')
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali')

console.log(gallery)

Ожидаемый вывод:
{
  'Mona Lisa': 'Leonardo da Vinci, 1503-1506',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
  'The Persistence of Memory': 'Salvador Dali'
}
*/

const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch'
};

// gallery['The Last Supper'] = 'Leonardo da Vinci'; // EXAMPLE

function updateGallery(objectGallery, keyTitle, newValueOfTitle) {
  if (typeof keyTitle !== 'string' || typeof newValueOfTitle !== 'string') {
    console.log(`Ошибка! Введите строку!`);
    return;
  }

  let found = false;

  for (const key in objectGallery) {
    if (objectGallery[key] === newValueOfTitle) {
      objectGallery[key] += `, ${newValueOfTitle}`;
      found = true;
      break;
    }
  }
  if (!found) {
    objectGallery[keyTitle] = newValueOfTitle;
  }
}

// console.log(gallery);

// updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506');
// updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dalí');

// console.log(gallery);

{
  /*

Напишите функцию, которая добавляет именованное свойство к объекту. Должна быть предусмотрена возможность присвоения этому свойству нового значения. Если свойство уже существует в объекте, то должно быть выдано сообщение об ошибке.

*/
  const object = {};

  function addProperty(obj, prop, value) {
    let found = false;

    //Значение prop должно быть строкой
    if (typeof prop !== 'string') {
      console.log(`Error, ${prop} in not sting`);
      return;
    }

    // Проверка на совпадение, если оно есть, то значение ключа обновляется и вывод ошибки о том, что нашло совпадение
    for (const key in obj) {
      if (key === prop) {
        found = true;
        // throw new Error('Свойство уже существует');
      }
    }
    if (!found) {
      obj[prop] = value;
      console.log(`Ключ ${value} присвоился объекту`);
    }

    return obj;
  }

  console.log(object);
  console.log(addProperty(object, 'name', 'Lele'));
  console.log(addProperty(object, 'age', 25));
  // console.log(addProperty(object, 'age', 26));
  console.log(addProperty(object, 'age', 26));
}
