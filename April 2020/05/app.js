/**
 * @description Reverse a String.
 */

let s = 'Hello';

function reverseSrting(s) {
  let temp = '';
  for (i = s.length - 1; i >= 0; i--) {
    temp += s[i];
  }
  return temp;
}
console.log(reverseSrting(s));
