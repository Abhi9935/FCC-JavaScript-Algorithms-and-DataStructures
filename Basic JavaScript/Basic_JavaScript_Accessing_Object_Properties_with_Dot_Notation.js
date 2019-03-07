/*
Basic JavaScript: Accessing Object Properties with Dot Notation

There are two ways to access the properties of an object: dot notation (.) 
and bracket notation ([]), similar to an array.
Dot notation is what you use when you know the name of the property you're trying 
to access ahead of time.
Here is a sample of using dot notation (.) to read an object's property:
```
var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2
```
Read in the property values of testObj using dot notation. Set the variable hatValue 
equal to the object's property hat and set the variable shirtValue equal to the object's 
property shirt.

Test Cases:-
Passed
hatValue should be a string
Passed
The value of hatValue should be "ballcap"
Passed
shirtValue should be a string
Passed
The value of shirtValue should be "jersey"
Passed
You should use dot notation twice
*/
// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line