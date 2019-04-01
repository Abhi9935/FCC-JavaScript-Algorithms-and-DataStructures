/*
Basic JavaScript: Replacing If Else Chains with Switch

If you have many options to choose from, a switch statement can be easier to write than many chained if/else 
if statements. The following:
```
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
```
can be replaced with:
```
switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
```
Change the chained if/else if statements into a switch statement.

Test Cases:-
Passed
You should not use any else statements anywhere in the editor
Passed
You should not use any if statements anywhere in the editor
Passed
You should have at least four break statements
Passed
chainToSwitch("bob") should be "Marley"
Passed
chainToSwitch(42) should be "The Answer"
Passed
chainToSwitch(1) should be "There is no #1"
Passed
chainToSwitch(99) should be "Missed me by this much!"
Passed
chainToSwitch(7) should be "Ate Nine"
*/
//----------------------------------------------------------
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line  
  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  // Only change code above this line  
  return answer;  
}

// Change this value to test
chainToSwitch(7);
