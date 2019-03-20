/*
Basic JavaScript: Introducing Else Statements

When a condition for an if statement is true, the block of code following it is executed. 
What about when that condition is false? Normally nothing would happen. 
With an else statement, an alternate block of code can be executed.
```
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
```
Combine the if statements into a single if/else statement.

Test Cases:-
Passed
You should only have one if statement in the editor
Passed
You should use an else statement
Passed
testElse(4) should return "5 or Smaller"
Passed
testElse(5) should return "5 or Smaller"
Passed
testElse(6) should return "Bigger than 5"
Passed
testElse(10) should return "Bigger than 5"
Passed
Do not change the code above or below the lines.
*/
function testElse(val) {
  var result = "";
  // Only change code below this line
  
  if (val > 5) {
    result = "Bigger than 5";
  }  
  else {
    result = "5 or Smaller";
  }  
  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);

