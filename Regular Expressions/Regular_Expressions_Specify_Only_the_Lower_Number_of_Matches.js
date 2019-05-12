/*
Regular Expressions: Specify Only the Lower Number of Matches

You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. 
Sometimes you only want to specify the lower number of patterns with no upper limit.
To only specify the lower number of patterns, keep the first number followed by a comma.

For example, to match only the string "hah" with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.
```
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
multipleA.test(A100); // Returns true
```
Change the regex haRegex to match the word "Hazzah" only when it has four or more letter z's.

Test Cases:-
Passed
Your regex should use curly brackets.
Passed
Your regex should not match "Hazzah"
Passed
Your regex should not match "Hazzzah"
Passed
Your regex should match "Hazzzzah"
Passed
Your regex should match "Hazzzzzah"
Passed
Your regex should match "Hazzzzzzah"
Passed
Your regex should match "Hazzah" with 30 z\'s in it.
*/
//------------------------------------------------------------
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);