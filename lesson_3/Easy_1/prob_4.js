//Using the following string, create a new string that contains all
// lowercase letters except for the first character,
// which should be capitalized. (See the example output.)

const munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

//ANS
const firsCharCap = munstersDescription.slice(0,1).toUpperCase();
const remainingChars = munstersDescription.slice(1).toLowerCase();
const munstersNew = firsCharCap + remainingChars;