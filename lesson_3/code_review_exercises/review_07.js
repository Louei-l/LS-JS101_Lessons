function crunch(text) {
  let result = '';
  let i = 0;
    while (i < text.length) {
    if (i < text.length - 1) {
      if (text[i] != text[i + 1]) {
        result += text[i];
      }
    } else {
      result += text[i];
    }
    i += 1;
  }
  return result;
}

/*
Overal the code produces correct outcome. 
A few things could have been done better:
1. better variable names: result should be crunchText and i should be charIndex
2. the while loop and first if statemnt can be combined into single while condindition like so 
  while (charIndex < text.length - 1). By doing that we can also eliminate the else statement.
3. It is always best to use strict inequality to avoid unintended coercion so please change != to !==  

*/