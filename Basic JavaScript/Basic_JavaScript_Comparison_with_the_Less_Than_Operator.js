/*
Basic JavaScript: Comparison with the Less Than Operator

The less than operator (<) compares the values of two numbers. If the number to the left is less than the number 
to the right, it returns true. Otherwise, it returns false. Like the equality operator, less than operator 
converts data types while comparing.
Examples
```
2 < 5 // true
'3' < 7 // true
5 < 5 // false
3 < 2 // false
'8' < 4 // false
```
Add the less than operator to the indicated lines so that the return statements make sense.

Test Cases:-
Passed
testLessThan(0) should return "Under 25"
Passed
testLessThan(24) should return "Under 25"
Passed
testLessThan(25) should return "Under 55"
Passed
testLessThan(54) should return "Under 55"
Passed
testLessThan(55) should return "55 or Over"
Passed
testLessThan(99) should return "55 or Over"
Passed
You should use the < operator at least twice
*/
function testLessThan(val) {
  if (val<25) {  // Change this line
    return "Under 25";
  }  
  if (val<55) {  // Change this line
    return "Under 55";
  }
  return "55 or Over";
}
// Change this value to test
testLessThan(10);