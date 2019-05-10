/*
Regular Expressions: Restrict Possible Usernames

Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.
You need to check all the usernames in a database. Here are some simple rules that users have 
to follow when creating their username.

1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.
2) Username letters can be lowercase and uppercase.
3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.

Change the regex userCheck to fit the constraints listed above.

Test Cases:-
Passed
Your regex should match JACK
Passed
Your regex should not match J
Passed
Your regex should match Oceans11
Passed
Your regex should match RegexGuru
Passed
Your regex should not match 007
Passed
Your regex should not match 9
*/
//-------------------------------------------------------
let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]+[A-Za-z]+[0-9]*$/; // Change this line
let result = userCheck.test(username);