/**
 * @description Add 2 Binary Numbers
 * @param FACEBOOK - ADD BINARY (LeetCode)
 */
// let a = '11'
// let b = '1';
let a = '1010'
let b = '1011';
function addBinary(a: string, b: string) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = ''
  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) {
      sum = sum + parseInt(a[i]);
      i--;
    }
    if (j >= 0) {
      sum = sum + parseInt(b[j]);
      j--;
    }
    result = result + (sum % 2);
    carry = Math.floor(sum / 2);
  }
  if (carry) {
    result = result + carry;
  }
  return (result.split('').reverse().join(''));

}
console.log(addBinary(a, b));