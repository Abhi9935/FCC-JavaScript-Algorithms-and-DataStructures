/*
Basic Algorithm Scripting: Boo who

Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Test Cases:-
Passed
booWho(true) should return true.
Passed
booWho(false) should return true.
Passed
booWho([1, 2, 3]) should return false.
Passed
booWho([].slice) should return false.
Passed
booWho({ "a": 1 }) should return false.
Passed
booWho(1) should return false.
Passed
booWho(NaN) should return false.
Passed
booWho("a") should return false.
Passed
booWho("true") should return false.
Passed
booWho("false") should return false.
*/
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return (typeof bool === 'boolean');
}
booWho(null);
//----------------------------------------------------
//--------------------- OR ---------------------------
//----------------------------------------------------
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (bool === true || bool === false) {
    return true;
  } else {
    return false;
  }
}

booWho(null);