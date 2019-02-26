/*
Basic Algorithm Scripting: Falsy Bouncer

Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.
Remember to use Read-Search-Ask if you get stuck. Write your own code.
Test-Cases:-
bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
Passed
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
Passed
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
Passed
bouncer([1, null, NaN, 2, undefined]) should return [1, 2]
*/
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let newArr=[];
  for(let i=0;i<arr.length;i++){
    if(Boolean(arr[i]) === true){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
bouncer([7, "ate", "", false, 9]);