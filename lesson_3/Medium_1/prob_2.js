const munstersDescription = "The Munsters are creepy and spooky.";
//Return a new string that swaps the case of all of the letters:
//`tHE mUNSTERS ARE CREEPY AND SPOOKY.`;

//ANS
const regUp = /[A-Z]/;
const regLow = /[a-z]/;
const stringLength = munstersDescription.length;
let outputArr = [];

for (let charIndex = 0; charIndex < stringLength; charIndex += 1) {
  if (munstersDescription[charIndex] !== '.' || munstersDescription[charIndex] !== ' ') {
    if (regUp.test(munstersDescription[charIndex])) {
      outputArr.push(munstersDescription[charIndex].toLowerCase());

    } else if (regLow.test(munstersDescription[charIndex])) {
      outputArr.push(munstersDescription[charIndex].toUpperCase());

    } else {
      outputArr.push(munstersDescription[charIndex]);
    }
  }
}

const finalString = outputArr.join(' ');

console.log(finalString);
