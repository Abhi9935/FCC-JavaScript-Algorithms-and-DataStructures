/*
Basic JavaScript: Comparison with the Strict Equality Operator

Strict equality (===) is the counterpart to the equality operator (==). 
However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.
If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.
Examples
3 === 3 // true
3 === '3' // false
In the second example, 3 is a Number type and '3' is a String type.

Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7

Test Cases:-
Passed
testStrict(10) should return "Not Equal"
Passed
testStrict(7) should return "Equal"
Passed
testStrict("7") should return "Not Equal"
Passed
You should use the === operator
*/
// Setup
function testStrict(val) {
  if (val===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);