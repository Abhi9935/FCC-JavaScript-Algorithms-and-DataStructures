/*
ES6: Set Default Parameters for Your Functions

In order to help us create more flexible functions, ES6 introduces default parameters for functions.
Check out this code:
```
function greeting(name = "Anonymous") {
  return "Hello " + name;
}
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
```
The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter name will receive its default value "Anonymous" when you do not provide a value for the parameter. You can add default values for as many parameters as you want.

Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.

Test Cases:-
Passed
The result of increment(5, 2) should be 7.
Passed
The result of increment(5) should be 6.
Passed
default parameter 1 was used for value.
*/
//-----------------------------------------------------
const increment = (function() {
  "use strict";
  return function increment(number, value=1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6