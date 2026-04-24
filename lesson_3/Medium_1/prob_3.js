/**
 * * function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}
Alyssa noticed that this code would fail when the input is
0 or a negative number, and asked Alan to change the loop.
How can he make this work without using a do/while loop?
Note that we're not looking to find the factors for 0 or negative numbers,
but we want to handle it gracefully
instead of raising an exception or going into an infinite loop.

Bonus: What is the purpose of number % divisor === 0 in that code?
 */

//ANS
function factors(number) {
  if (number <= 0) {
    console.log('please enter a number greater than 0');
    return;
  }
  let divisor = number;
  let factors = [];

  for (let counter = 1; counter <= number; counter += 1) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(6));

//ANS BONUS
// the purpose of number % divisor === 0 is to check if the is a remainder if you divide number by divisor.
// if it is 0 then the divisor is the factor of the number.