let x;
console.log(x, ' ');
while (x > 1) {
  if (x % 2 == 0) {
    x = x / 2;
  } else {
    x = x * 3 + 1;
  }
  console.log(x, ' ')
}