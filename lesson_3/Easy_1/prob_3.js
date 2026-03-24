//Determine whether the following object of
//people and their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// ANS
console.log("Spot" in ages);

let agesArr =  Object.keys(ages);
console.log(agesArr.includes("Spot"));