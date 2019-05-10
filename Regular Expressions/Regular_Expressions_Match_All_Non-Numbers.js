/*
Regular Expressions: Match All Non-Numbers

The last challenge showed how to search for digits using the shortcut \d with a lowercase d. 
You can also search for non-digits using a similar shortcut that uses an uppercase D instead.

The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], 
which looks for a single character that is not a number between zero and nine.
Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.

Test Cases:-
Passed
Your regex should use the shortcut character to match non-digit characters
Passed
Your regex should use the global flag.
Passed
Your regex should find no non-digits in "9".
Passed
Your regex should find 6 non-digits in "Catch 22".
Passed
Your regex should find 11 non-digits in "101 Dalmatians".
Passed
Your regex should find 15 non-digits in "One, Two, Three".
Passed
Your regex should find 12 non-digits in "21 Jump Street".
Passed
Your regex should find 17 non-digits in "2001: A Space Odyssey".
*/
//---------------------------------------------------------------------
let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // Change this line
let result = numString.match(noNumRegex).length;
console.log(result);