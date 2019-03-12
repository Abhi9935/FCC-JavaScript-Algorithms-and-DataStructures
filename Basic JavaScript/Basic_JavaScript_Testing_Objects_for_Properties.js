/*
Basic JavaScript: Testing Objects for Properties

Sometimes it is useful to check if the property of a given object exists or not. We can use the 
.hasOwnProperty(propname) method of objects to determine if that object has the given property name. 
.hasOwnProperty() returns true or false if the property is found or not.
Example
```
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top"); // true
myObj.hasOwnProperty("middle"); // false
```
Modify the function checkObj to test myObj for checkProp. If the property is found, 
return that property's value. If not, return "Not Found".

Test Cases:-
Passed
checkObj("gift") should return "pony".
Passed
checkObj("pet") should return "kitten".
Passed
checkObj("house") should return "Not Found".
*/
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  let res="Not Found";
  if(myObj.hasOwnProperty(checkProp)){
    res=myObj[checkProp];
  }
  return res;
}

// Test your code by modifying these values
console.log(checkObj("gift"));
