/*
Basic JavaScript: Comparisons with the Logical And Operator

Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns 
true if and only if the operands to the left and right of it are true.
The same effect could be achieved by nesting an if statement inside another if:
```
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
```
will only return "Yes" if num is greater than 5 and less than 10. The same logic can be written as:
```
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```
Combine the two if statements into one statement which will return "Yes" if val is less than or equal to 
50 and greater than or equal to 25. Otherwise, will return "No".

Test Cases:-
Passed
You should use the && operator once
Passed
You should only have one if statement
Passed
testLogicalAnd(0) should return "No"
Passed
testLogicalAnd(24) should return "No"
Passed
testLogicalAnd(25) should return "Yes"
Passed
testLogicalAnd(30) should return "Yes"
Passed
testLogicalAnd(50) should return "Yes"
Passed
testLogicalAnd(51) should return "No"
Passed
testLogicalAnd(75) should return "No"
Passed
testLogicalAnd(80) should return "No"
*/
function testLogicalAnd(val) {
  // Only change code below this line

  if (val<=50 && val>=25) {
    return "Yes";    
  }
  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);