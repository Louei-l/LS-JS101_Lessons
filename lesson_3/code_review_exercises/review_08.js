function triangle(height) {
  let line = 1;
  while (line <= height) {
    let spaces = '';
    for (let i = 0; i < height - line; i++) {
      spaces += ' ';
    }
    let stars = '';
    for (let i = 0; i < line; i++) {
      stars += '*';
    }
    console.log(spaces + stars);
    line += 1;
  }
}

console.log(triangle(4));

/*
Overal the code produces correct outcome. 
A few things could have been done better:
1. we can use the .repeat() string method instead of the for loops
2. since we know the number of iterations from height we can use one single for loop like so

function triangle (height) {
  const STAR = '*';
  const PADDING = ' ';
  let output;
  for (let line = 1; i <= height; line += 1) {
    output = PADDING.repeat(height - line) + STAR.repeat(line);
    console.log(output);
  }
}
*/