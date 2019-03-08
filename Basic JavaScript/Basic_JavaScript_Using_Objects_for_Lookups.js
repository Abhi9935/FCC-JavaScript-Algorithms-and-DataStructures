/*
Basic JavaScript: Using Objects for Lookups

Objects can be thought of as a key/value storage, like a dictionary. 
If you have tabular data, you can use an object to "lookup" values rather than a switch 
statement or an if/else chain. This is most useful when you know that your input data is 
limited to a certain range.
Here is an example of a simple reverse alphabet lookup:
```
var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2]; // "Y"
alpha[24]; // "C"

var value = 2;
alpha[value]; // "Y"
```
Convert the switch statement into an object called lookup. Use it to look up val and assign 
the associated string to the result variable.

Test Cases:-
Passed
phoneticLookup("alpha") should equal "Adams"
Passed
phoneticLookup("bravo") should equal "Boston"
Passed
phoneticLookup("charlie") should equal "Chicago"
Passed
phoneticLookup("delta") should equal "Denver"
Passed
phoneticLookup("echo") should equal "Easy"
Passed
phoneticLookup("foxtrot") should equal "Frank"
Passed
phoneticLookup("") should equal undefined
Passed
You should not modify the return statement
Passed
You should not use case, switch, or if statements
*/
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
   let abc={
    "alpha":"Adams",
    "bravo": "Boston",
    "charlie" : "Chicago",
    "delta": "Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
  }
result=abc[val];
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");