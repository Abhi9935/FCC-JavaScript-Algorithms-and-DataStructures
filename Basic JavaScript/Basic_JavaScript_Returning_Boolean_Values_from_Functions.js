/*
Basic JavaScript: Returning Boolean Values from Functions

You may recall from Comparison with the Equality Operator that all comparison operators return a boolean 
true or false value.
Sometimes people use an if/else statement to do a comparison, like this:
```
function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
```
But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:
```
function isEqual(a,b) {
  return a === b;
}
```
Fix the function isLess to remove the if/else statements.

Test Cases:-
Passed
isLess(10,15) should return true
Passed
isLess(15,10) should return false
Passed
You should not use any if or else statements
*/
//------------------------------------------------------------------------------
function isLess(a, b) {
  // Fix this code
 return a<b;
}

// Change these values to test
isLess(10, 15);