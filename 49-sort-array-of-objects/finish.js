/** ЗАДАЧА 49 - Сортировка объектов в массиве
 *
 * 1. Создайте функцию "sortProductsByPrice" с одним параметром "products"
 *
 * 2. Эта функция должна отсортировать входной массив товаров
 * по цене каждого товара в порядке возрастания
 * и вернуть отсортированный массив
 *
 * 3. Оригинальный массив должен остаться без изменений
 */

const sortProductsByPrice = (products) => {
  const copyOfProducts = [...products];
  return copyOfProducts.sort((a, b) => a.price - b.price);
  // return [...products].sort((a, b) => b.price - a.price);
};

const inputProducts = [
  {
    title: "Phone case",
    price: 235,
    quantity: 2,
    category: "Accessories",
  },
  {
    title: "Android phone",
    price: 150,
    quantity: 1,
    category: "Phones",
  },
  {
    title: "Headphones",
    price: 78,
    quantity: 1,
    category: "Accessories",
  },
  {
    title: "Sport Watch",
    price: 55,
    quantity: 2,
    category: "Watches",
  },
];

const sortedProducts = sortProductsByPrice(inputProducts);

console.log(sortedProducts); // Массив отсортированных товаров

console.log(inputProducts); // Оригинальный массив не должен измениться

const quantityReadBooks = [5, 8, 9, 2, 11];

// console.log(quantityReadBooks.sort()); // [ 11, 2, 5, 8, 9 ]
// console.log(quantityReadBooks.sort((a, b) => a - b)); // [ 2, 5, 8, 9, 11 ]
// console.log(quantityReadBooks.sort((a, b) => b - a)); // [ 11, 9, 8, 5, 2 ]
