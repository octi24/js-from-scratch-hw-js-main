// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
  return a > b ? (a > c ? a : c) : b > c ? b : c;
  // return Math.max(a, b, c);
}
const highest = findLargest(2, 4, 6);
console.log(highest);
