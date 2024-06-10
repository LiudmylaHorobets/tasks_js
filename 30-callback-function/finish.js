/** ЗАДАЧА 30 - Колбэк функция
 *
 * 1. Что будет выведено в консоль?
 * Постарайтесь ответить без запуска кода.
 *
 * 2. Нужно ли как-то исправить этот код?
 */

setTimeout(function () {
  console.log("Hello from function myFn");
}, 1000);

setTimeout(() => {
  console.log("Hello world");
}, 3000);
