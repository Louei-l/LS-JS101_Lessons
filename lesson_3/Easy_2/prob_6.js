const arr = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
//Create a new array that contains all of the above values,
//but in an un-nested format:

const arrNew = arr.flat();
console.log(arrNew);