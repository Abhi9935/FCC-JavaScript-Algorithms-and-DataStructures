/*
Basic Algorithm Scripting: Reverse a String

Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Test Cases:- 
Passed
reverseString("hello") should return a string.
Passed
reverseString("hello") should become "olleh".
Passed
reverseString("Howdy") should become "ydwoH".
Passed
reverseString("Greetings from Earth") should return "htraE morf sgniteerG".
*/
function reverseString(str) {
  let newStr=str.split("").reverse().join("");  
  return newStr;
}

console.log(reverseString("hello"));