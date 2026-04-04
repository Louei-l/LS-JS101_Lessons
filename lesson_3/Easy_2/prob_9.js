/**
 * Back in the stone age (before CSS), we used spaces to align things
 * on the screen.
 * If we have a 40-character wide table of Flintstone family members,
 * how can we center the following title above the table with spaces?
 */

let title = "Flintstone Family Members";


//ANS
const titleLength = title.length;
const MAX_CHAR = 40;
const spacePaddingLength = MAX_CHAR - titleLength;
const leftPaddingLength = Math.floor((spacePaddingLength / 2)) - 1;
const rightPaddingfLength = Math.ceil((spacePaddingLength / 2)) - 1;

function leftPadding (leftPaddingLength) {
  let result = '';
  for (let space = 0; space < leftPaddingLength; space += 1) {
    result += ' ';
  }
  return result;
};

function rightPadding (rightPaddingfLength) {
  let result = '';
  for (let space = 0; space < rightPaddingfLength; space += 1) {
    result += ' ';
  }
  return result;
};

const leftSpace = leftPadding(leftPaddingLength);
const rightSpace = rightPadding(rightPaddingfLength);

const output = leftSpace + " " + title + " " + rightSpace;

console.log(output);
console.log(output.length);