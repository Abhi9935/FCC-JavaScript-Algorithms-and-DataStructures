/*
Basic JavaScript: Introducing Else If Statements

If you have multiple conditions that need to be addressed, you can chain if statements together with else 
if statements.
```
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
```
Convert the logic to use else if statements.

Test Cases:-
Passed
You should have at least two else statements
Passed
You should have at least two if statements
Passed
You should have closing and opening curly braces for each condition
Passed
testElseIf(0) should return "Smaller than 5"
Passed
testElseIf(5) should return "Between 5 and 10"
Passed
testElseIf(7) should return "Between 5 and 10"
Passed
testElseIf(10) should return "Between 5 and 10"
Passed
testElseIf(12) should return "Greater than 10"
*/
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }  
  else if (val < 5) {
    return "Smaller than 5";
  }
  else{
     return "Between 5 and 10";
  } 
}

// Change this value to test
testElseIf(7);
