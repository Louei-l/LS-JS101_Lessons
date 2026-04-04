//Starting with the string:
let famousWords = "seven years ago...";
//show two different ways to put the expected "Four score and " in front of it.


//ANS
const wordsToAdd = "Four score and ";

const ver1 = "Four score and " + famousWords;
const ver2 = wordsToAdd + famousWords;
const ver3 = wordsToAdd.concat("", famousWords);

console.log(ver1);
console.log(ver2);
console.log(ver3);