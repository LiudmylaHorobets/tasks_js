/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const books = [
  {
    author: "Liu Cixin",
    title: "The Three-Body Problem",
    price: 250,
    isAvailableForSale: true,
  },
  {
    author: "George Orwell",
    title: "1984",
    price: 300,
    isAvailableForSale: false,
  },
  {
    author: "Franz Kafka",
    title: "The Metamorphosis",
    price: 150,
    isAvailableForSale: true,
  },
];

console.log(books.length);

const newBook = {
  author: "J.K. Rowling",
  title: "Harry Potter and the Philosopher's Stone",
  price: 200,
  isAvailableForSale: true,
};
books.push(newBook);

console.log(books);
