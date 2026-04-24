//What will the following code output?
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

//ANS
// .slice() method does not mutate the orignal array, it returns a copy.
// => [{ first: "value1" }, { second: "value2" }, 3, 4, 5]