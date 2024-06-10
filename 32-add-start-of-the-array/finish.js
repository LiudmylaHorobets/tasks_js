/** ЗАДАЧА 32 - Добавление элементов в начало массива
 *
 * 1. Добавьте элементы а начало массива:
 *  - сначала строку "Привет"
 *  - потом число 100
 *
 * 2. Выведите длину результирующего массива в консоль
 */

const myArray = [true, null];

// console.log(myArray.length);

myArray.unshift("Hello");

console.log(myArray.unshift(100));

// console.log(myArray); // [100, "Hello", true, null]
