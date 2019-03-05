/*
Basic Algorithm Scripting: Confirm the Ending

Check if a string (first argument, str) ends with the given target string 
(second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
But for the purpose of this challenge, we would like you to use one of the JavaScript substring
methods instead.
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Test Cases:-
Passed
confirmEnding("Bastian", "n") should return true.
Passed
confirmEnding("Congratulation", "on") should return true.
Passed
confirmEnding("Connor", "n") should return false.
Passed
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
Passed
confirmEnding("He has to give me a new name", "name") should return true.
Passed
confirmEnding("Open sesame", "same") should return true.
Passed
confirmEnding("Open sesame", "pen") should return false.
Passed
confirmEnding("Open sesame", "game") should return false.
Passed
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
Passed
confirmEnding("Abstraction", "action") should return true.
Passed
Do not use the built-in method .endsWith() to solve the challenge.
*/
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  let newStr = str.substring(str.length - target.length);
  return newStr === target;  
}

confirmEnding("Bastian", "n");
