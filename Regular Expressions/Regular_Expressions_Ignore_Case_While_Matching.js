/*
Regular Expressions: Ignore Case While Matching

Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences.
Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are "A", "B", and "C". Examples of lowercase are "a", "b", and "c".
You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings "ignorecase", "igNoreCase", and "IgnoreCase".

Write a regex fccRegex to match "freeCodeCamp", no matter its case. Your regex should not match any abbreviations or variations with spaces.

Test Cases:-
Passed
Your regex should match freeCodeCamp
Passed
Your regex should match FreeCodeCamp
Passed
Your regex should match FreecodeCamp
Passed
Your regex should match FreeCodecamp
Passed
Your regex should not match Free Code Camp
Passed
Your regex should match FreeCOdeCamp
Passed
Your regex should not match FCC
Passed
Your regex should match FrEeCoDeCamp
Passed
Your regex should match FrEeCodECamp
Passed
Your regex should match FReeCodeCAmp
*/
//------------------------------------------------------
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);