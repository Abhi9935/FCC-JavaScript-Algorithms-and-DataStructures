/*
Basic JavaScript: Use Multiple Conditional (Ternary) Operators

In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.
The following function uses if, else if, and else statements to check multiple conditions:
```
function findGreaterOrEqual(a, b) {
  if(a === b) {
    return "a and b are equal";
  }
  else if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```
The above function can be re-written using multiple conditional operators:
```
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
```
Use multiple conditional operators in the checkSign function to check if a number is positive, negative or zero.

Test Cases:-
Passed
checkSign should use multiple conditional operators
Passed
checkSign(10) should return "positive". Note that capitalization matters
Passed
checkSign(-12) should return "negative". Note that capitalization matters
Passed
checkSign(0) should return "zero". Note that capitalization matters
*/
//--------------------------------------------------------
function checkSign(num) {
   return (num < 0) ? "negative" : (num > 0) ? "positive" : "zero";
}

checkSign(10);