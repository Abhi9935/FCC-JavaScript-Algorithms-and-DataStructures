/*
Basic Algorithm Scripting: Find the Longest Word in a String

Return the length of the longest word in the provided sentence.
Your response should be a number.
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Test Cases:-
Passed
findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
Passed
findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
Passed
findLongestWordLength("May the force be with you") should return 5.
Passed
findLongestWordLength("Google do a barrel roll") should return 6.
Passed
findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
Passed
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.
*/
function findLongestWordLength(str) {
  let newStr=str.split(" ");
  let longestString=0;
  for(let i=0; i<newStr.length;i++){
    if(newStr[i].length>longestString){
    	longestString=newStr[i].length;
    }
  }
  return longestString;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");