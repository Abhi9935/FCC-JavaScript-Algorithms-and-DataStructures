/*
Regular Expressions: Extract Matches

So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method.
To use the .match() method, apply the method on a string and pass in the regex inside the parentheses. Here's an example:
```
"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]
```
Apply the .match() method to extract the word coding.

Test Cases:-
Passed
The result should have the word coding
Passed
Your regex codingRegex should search for coding
Passed
You should use the .match() method.
*/
//-------------------------------------------------------------
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line