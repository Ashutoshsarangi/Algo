/**
 * @description Revese A Integer.
 * @param n --> 123  Output --> 321
 * @param n --> 120 OutPut --> 21
 * @param n --> -123 Output --> -321
 * 
 * @param GOOGLE - REVERSE INTEGER (LeetCode)
 */

let n = 123
// let n = 120
// let n = -123

function reverseIntegrer(n) {
  let item = n
  let sum = 0;
  while (item > 0) {
    sum = (sum * 10) + item % 10;
    item = Math.floor(item / 10);
  }
  return sum;
}

if (n > 0) {
  console.log(reverseIntegrer(n));
} else {
  console.log(-1 * (reverseIntegrer(-1 * n)));
}
