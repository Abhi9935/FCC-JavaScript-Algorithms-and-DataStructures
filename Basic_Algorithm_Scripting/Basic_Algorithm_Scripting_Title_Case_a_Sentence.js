/*
Basic Algorithm Scripting: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Test Cases:
titleCase("I'm a little tea pot") should return a string.
Passed
titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
Passed
titleCase("sHoRt AnD sToUt") should return Short And Stout.
Passed
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.
*/
function titleCase(str) { 
 let sol="";
  let newStr=str.split(" ");
  for(let i=0;i<newStr.length;i++){
    sol+=newStr[i].substr(0, 1).toUpperCase()+newStr[i].substr(1, newStr[i].length-1).toLowerCase()+" ";
  }
  return sol.trim();
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));