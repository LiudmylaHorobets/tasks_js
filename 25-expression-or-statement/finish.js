/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

//expression statement
15;

//statement
const myObject = {
  //expression
  x: 10,
  y: true,
};

//expression statement
myObject.z = "abc";

//expression statement
delete myObject.x;

//statement
let newVariable;

//expression statement
newVariable = 30 + 5;

//expression statement
console.log(newVariable); //expression

//
if (newVariable > 10) {
  console.log(`${newVariable} больше 10`);
}
