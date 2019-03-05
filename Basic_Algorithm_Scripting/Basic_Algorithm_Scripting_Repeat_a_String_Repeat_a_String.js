/*
Basic Algorithm Scripting: Repeat a String Repeat a String

Repeat a given string str (first argument) for num times (second argument).
Return an empty string if num is not a positive number.
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Test Cases:-
Passed
repeatStringNumTimes("*", 3) should return "***".
Passed
repeatStringNumTimes("abc", 3) should return "abcabcabc".
Passed
repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
Passed
repeatStringNumTimes("abc", 1) should return "abc".
Passed
repeatStringNumTimes("*", 8) should return "********".
Passed
repeatStringNumTimes("abc", -2) should return "".
Passed
The built-in repeat()-method should not be used
*/
function repeatStringNumTimes(str, num) {
  // repeat after me
  let newStr="";
  for(let i=0;i<num;i++){
    newStr+=str;
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);