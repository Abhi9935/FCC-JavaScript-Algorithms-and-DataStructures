/*
Basic Algorithm Scripting: Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Test Cases:-
Passed
truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".
Passed
truncateString("Peter Piper picked a peck of pickled peppers", 11) should return "Peter Piper...".
Passed
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
Passed
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
Passed
truncateString("A-", 1) should return "A...".
Passed
truncateString("Absolutely Longer", 2) should return "Ab...".
*/
function truncateString(str, num) {
  // Clear out that junk in your trunk
  let newStr="";
  if(str.length>num){
      newStr=str.substring(0,num)+"...";
  }else{
      newStr=str;
  }
  return newStr;  
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
