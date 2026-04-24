let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);

//ANS
//family data did get ransaked because objects can be mutated directly.

console.log(munsters);
/*{
  Herman: { age: 74, gender: 'other' },
  Lily: { age: 72, gender: 'other' },
  Grandpa: { age: 444, gender: 'other' },
  Eddie: { age: 52, gender: 'other' },
  Marilyn: { age: 65, gender: 'other' }
}*/