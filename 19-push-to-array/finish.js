/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 *
 * 2. Добавьте в конец массива несколько новых элементов
 *
 * 3. Выведите в консоль длину результирующего массива
 */

const currentBooks = [
  "Дім у волошковому морі",
  "Завтра, завтра, завтра",
  "Джонатан Стрейндж та містер Норрелл",
];

currentBooks.push("Маленькі жінки", "Картонні замки");

console.log(currentBooks);

console.log(currentBooks.length);
