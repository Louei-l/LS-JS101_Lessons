//Examine the following code carefully. Can you identify all of the variables,
// primitive values, and objects that exist when this code executes?

let arr = [1, 2, 3]; // arr is varibale, [1, 2, 3] is object
let newArr = arr; // newArr is variable points to object

const num = arr[0]; // num is variable with primitive value
let newNum = num; // newNUm is variable with primitve value

function double(num) { // double is varibale, num is a parameter
  return num * 2; // num is variable, 2 is primitive
}

double(newNum); //double is varibale, newNum is argument