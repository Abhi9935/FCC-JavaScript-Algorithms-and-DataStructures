/*
Regular Expressions: Check for All or None

Sometimes the patterns you want to search for may have parts of it that may or may not exist. 
However, it may be important to check for them nonetheless.
You can specify the possible existence of an element with a question mark, ?. This checks for zero 
or one of the preceding element. You can think of this symbol as saying the previous element is optional.

For example, there are slight differences in American and British English and you can use the 
question mark to match both spellings.
```			
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true
```
Change the regex favRegex to match both the American English (favorite) and the British 
English (favourite) version of the word.

Test Cases:-
Passed
Your regex should use the optional symbol, ?.
Passed
Your regex should match "favorite"
Passed
Your regex should match "favourite"
Passed
Your regex should not match "fav"
*/
//----------------------------------------------------
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);