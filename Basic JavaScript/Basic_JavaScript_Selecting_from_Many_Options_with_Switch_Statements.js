/*
Basic JavaScript: Selecting from Many Options with Switch Statements

If you have many options to choose from, use a switch statement. A switch statement tests a value and can 
have many case statements which define various possible values. Statements are executed from the first 
matched case value until a break is encountered.
Here is a pseudocode example:
```
switch(num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  case valueN:
    statementN;
    break;
}
```
case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. 
If the break is omitted, the next statement will be executed.
-------------------------------------
Write a switch statement which tests val and sets answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"

Test Cases:-
Passed
caseInSwitch(1) should have a value of "alpha"
Passed
caseInSwitch(2) should have a value of "beta"
Passed
caseInSwitch(3) should have a value of "gamma"
Passed
caseInSwitch(4) should have a value of "delta"
Passed
You should not use any if or else statements
Passed
You should have at least 3 break statements
*/
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 1:
      answer="alpha";
      break;
    case 2:
      answer="beta";
      break;
    case 3:
      answer="gamma";
      break;
    case 4:
      answer="delta";
  }
  // Only change code above this line  
  return answer;  
}
// Change this value to test
caseInSwitch(1);
