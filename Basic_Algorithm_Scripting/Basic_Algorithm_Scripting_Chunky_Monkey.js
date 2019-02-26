/*
Basic Algorithm Scripting: Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) 
and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Test Cases :-
Passed
chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
Passed
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
Passed
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
Passed
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
Passed
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
Passed
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
Passed
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

*/
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr=[];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
//---------------------------------------------------
// ---------------------- Or ------------------------
//---------------------------------------------------
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr=[];
   while (arr.length > size) {
        newArr.push(arr.splice(0, size))
    }
    if (arr.length){
        newArr.push(arr);
    }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
