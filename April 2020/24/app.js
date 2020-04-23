/**
 * @description Got A new Approach for the Power Converting Binary
 * Learn use of Xor Operators
 * @param CLOUDERA - NUMBER COMPLEMENT (LeetCode)
 */
// let num = 5;
let num = 8;
let result = 0;
let pow = 1;
while (num > 0) {
  result += ((num % 2) ^ 1) * pow;
  pow = pow << 1;
  num = Math.floor(num / 2);
}
console.log(result);