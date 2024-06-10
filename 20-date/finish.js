/** ЗАДАЧА 20 - Дата
 *
 * 1. Создайте переменную и присвойте ей текущее время в миллисекундах
 *
 * 2. Выведите значение в консоль
 */

const currentDate = new Date();
console.log(currentDate);
const currentTimeMs = currentDate.getTime(); // getTime дає нам час в мілісекундах від 00:00 01.01.1970
console.log(currentTimeMs);
