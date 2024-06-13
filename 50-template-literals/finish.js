/** ЗАДАЧА 50 - Шаблонные строки
 *
 * 1. Создайте функцию "templateLiteral" с одним параметром "num"
 *
 * 2. Функция должна возвращать многострочную строку.
 *
 * 3. Ниже приведены примеры вызовов функции.
 */

function templateLiteral(num) {
  return `Number ${num}.\nThis number is ${
    num < 10 ? "less than" : "greater than or equal to"
  } 10.\nThe square root of this number is - ${Math.sqrt(num)}.`;
}

// ТЕСТ 1
const myNumber = 9;
console.log(templateLiteral(myNumber));

// ТЕСТ 2
const myAnotherNumber = 36;
console.log(templateLiteral(myAnotherNumber));
