const text = 'The Flintstones Rock!';

//ANS
let leftSpacing = '';

for (let count = 0; count < 10; count += 1) {
  console.log(`${leftSpacing}${text}`);
  leftSpacing += ' ';
}