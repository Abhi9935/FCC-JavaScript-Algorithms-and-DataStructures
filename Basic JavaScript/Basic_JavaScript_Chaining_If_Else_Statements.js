/*
Basic JavaScript: Chaining If Else Statements

if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained 
if / else if statements:
```
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
```
Write chained if/else if statements to fulfill the following conditions:
--------
num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"
--------
Test Cases:-
Passed
You should have at least four else statements
Passed
You should have at least four if statements
Passed
You should have at least one return statement
Passed
testSize(0) should return "Tiny"
Passed
testSize(4) should return "Tiny"
Passed
testSize(5) should return "Small"
Passed
testSize(8) should return "Small"
Passed
testSize(10) should return "Medium"
Passed
testSize(14) should return "Medium"
Passed
testSize(15) should return "Large"
Passed
testSize(17) should return "Large"
Passed
testSize(20) should return "Huge"
Passed
testSize(25) should return "Huge"
*/
function testSize(num) {
  // Only change code below this line
  if(num<5){
    return "Tiny";
  } else if(num<10){
    return "Small";
  } else if(num<15){
    return "Medium";
  } else if(num<20){
    return "Large";
  } else {
    return "Huge";
  }
  // Only change code above this line
}

// Change this value to test
testSize(7);