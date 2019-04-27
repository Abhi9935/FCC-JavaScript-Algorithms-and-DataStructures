/*
Debugging: Catch Missing Open and Closing Parenthesis After a Function Call

When a function or method doesn't take any arguments, you may forget to include the (empty) 
opening and closing parentheses when calling it. Often times the result of a function call is saved 
in a variable for other use in your code. This error can be detected by logging variable 
values (or their types) to the console and seeing that one is set to a function reference, 
instead of the expected value the function returns.
The variables in the following example are different:
```
function myFunction() {
  return "You rock!";
}
let varOne = myFunction; // set to equal a function
let varTwo = myFunction(); // set to equal the string "You rock!"
```
Fix the code so the variable result is set to the value returned from calling the function getNine.

Test Cases:-
Passed
Your code should fix the variable result so it is set to the number that the function getNine returns.
Passed
Your code should call the getNine function.
*/
//---------------------------------------------
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();
console.log(result);