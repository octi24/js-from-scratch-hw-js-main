/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`, метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount` к текущему количеству этого ресурса в объекте.
*/

const game = {
  resources: {
    gold: 250,
    lumber: 100
  },
  addResource(resource, amount) {
    if (typeof amount !== 'number' || isNaN(amount) || amount <= 0) {
      console.log(`Ошибка! ${amount} должно быть положительным числом!`);
      return;
    }

    let found = false;

    for (const key in this.resources) {
      if (resource === key) {
        this.resources[resource] += amount;
        found = true;
        break;
      }
    }
    if (!found) {
      console.log('Invalid resource');
    }
  }
};
// console.log(`Gold: ${game.resources.gold} до`);
// console.log(`Lumber: ${game.resources.lumber} до`);
// game.addResources('gold', 50);
// game.addResources('gold', -50);
// game.addResources('lumber', 50);
// game.addResources('stone', 50);
// console.log(`Gold: ${game.resources.gold} после`);
// console.log(`Lumber: ${game.resources.lumber} после`);
