//What will the following code output?
console.log([1, 2, 3] + [4, 5]);

//ANS
//=> 1, 2, 3, 4, 5

//correction
//=> 1, 2, 34, 5

/**
 * explanation
 * In JavaScript, the `+` operator doesn’t concatenate arrays
 * the way you might expect. Instead:

1. Each array is first converted to a string.
2. Then those two strings are concatenated.

Step by step:
[1, 2, 3].toString(); // "1,2,3"
[4, 5].toString();    // "4,5"

Then JavaScript does:
"1,2,3" + "4,5" // "1,2,34,5"

So the output is the single string:
1,2,34,5

If you actually want to join arrays, you’d use something like:
[1, 2, 3].concat([4, 5]); // [1, 2, 3, 4, 5]
 */