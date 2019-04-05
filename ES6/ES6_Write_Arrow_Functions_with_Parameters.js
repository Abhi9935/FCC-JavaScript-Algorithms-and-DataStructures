/*
ES6: Write Arrow Functions with Parameters

Just like a normal function, you can pass arguments into arrow functions.
```
// doubles input value and returns it
const doubler = (item) => item * 2;
```
You can pass more than one argument into arrow functions as well.
--------------------------------------------------------------------------------
Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.

Test Cases:-
Passed
User did replace var keyword.
Passed
myConcat should be a constant variable (by using const).
Passed
myConcat should be a function
Passed
myConcat() returns the correct array
Passed
function keyword was not used.
*/
//-------------------------------------------------------------------------
const myConcat =(arr1, arr2) =>arr1.concat(arr2)
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));