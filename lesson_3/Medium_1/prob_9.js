function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
//console.log(rps("rock"));

//ANS
// eslint-disable-next-line max-len
//1 in -> (rock,paper) out -> paper | in -> (rock, scissors) out -> rock | in (rock) -> out rock
//2 in -> (paper, rock) out -> paper | in -> (rock, rock) out -> rock
//3 in -> (paper, rock) out -> paper