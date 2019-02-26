/*
Basic Algorithm Scripting: Mutations
Return true if the string in the first element of the array contains all of the letters of the string in 
the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are 
present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Test Cases :-
Passed
mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
Passed
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
Passed
mutation(["Mary", "Army"]) should return true.
Passed
mutation(["Mary", "Aarmy"]) should return true.
Passed
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
Passed
mutation(["hello", "neo"]) should return false.
Passed
mutation(["voodoo", "no"]) should return false.

*/
// Wrong Approach...
function mutation(arr) {
  let firstStr=arr[0];
  let secStr=arr[1];
  let count=0;
  for(let i=0;i<secStr.length;i++){
    for(let j=0;j<firstStr.length; j++){
      if(secStr[i].toLowerCase()==firstStr[j].toLowerCase()){
        count++;
      }
    }
  }
  return (secStr.length==count);
}

mutation(["hello", "hey"]);
//------------------------------------------------------
//-------------------- Right Way -----------------------
//------------------------------------------------------
function mutation(arr) {
  let firstStr=arr[0].toLowerCase();
  let secStr=arr[1].toLowerCase();
  for (let i = 0; i < secStr.length; i++) {
    let match = firstStr.indexOf(secStr[i]);
    if (match === -1) {
      return false;
    }
  }
  return true;
}
mutation(["hello", "hey"]);