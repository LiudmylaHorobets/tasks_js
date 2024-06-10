/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const myName = "Liudmyla";
const mySurname = "Horobets";
const profession = "Fullstack Developer";

// const personInfo = `Мене звати ${myName} ${mySurname} and I am ${profession}`;
const personInfo =
  "My name is " + myName + " " + mySurname + " and I am a " + profession;

console.log(personInfo);