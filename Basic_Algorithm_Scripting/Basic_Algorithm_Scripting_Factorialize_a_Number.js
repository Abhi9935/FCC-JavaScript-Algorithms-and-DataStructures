/*
Basic Algorithm Scripting: Factorialize a Number

Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive 
integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Only integers greater than or equal to zero will be supplied to the function.
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Test Cases:-
Passed
factorialize(5) should return a number.
Passed
factorialize(5) should return 120.
Passed
factorialize(10) should return 3628800.
Passed
factorialize(20) should return 2432902008176640000.
Passed
factorialize(0) should return 1.
*/
function factorialize(num) {
  let fact=1;
  for(let i=num;i>0;i--){
    fact=fact*i;
  }
  return fact;
}

factorialize(5);