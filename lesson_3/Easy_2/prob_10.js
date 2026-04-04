//Write a one-line expression to count the number
// of lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";


//ANS
const stmt1 = statement1.split('').filter((char) => char === 't').length;
const stmt2 = statement2.split('').filter((char) => char === 't').length;
console.log(stmt1, stmt2);