/*
Debugging: Catch Mixed Usage of Single and Double Quotes

JavaScript allows the use of both single ('') and double ("") quotes to declare a string. Deciding which one to use generally comes down to personal preference, with some exceptions.

Having two choices is great when a string has contractions or another piece of text that's in quotes. Just be careful that you don't close the string too early, which causes a syntax error.
Here are some examples of mixing quotes:
```
// These are correct:
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
// This is incorrect:
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
```
Of course, it is okay to use only one style of quotes. You can escape the quotes inside the string by using the backslash (\) escape character:
```
// Correct use of same quotes:
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
```
Fix the string so it either uses different quotes for the href value, or escape the existing ones. Keep the double quote marks around the entire string.

Test Cases:-
Passed
Your code should fix the quotes around the href value "#Home" by either changing or escaping them.
Passed
Your code should keep the double quotes around the entire string.
*/
//----------------------------------------------
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);