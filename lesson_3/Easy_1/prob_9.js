//In the previous problem, our first answer added 'Dino' to the array like this:
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");
//How can we add multiple items to our array? ('Dino' and 'Hoppy')

//ANS
let arr = ['Dino', 'Hoppy'];

arr.forEach(element => {
  flintstones.push(element);
});

console.log(flintstones);