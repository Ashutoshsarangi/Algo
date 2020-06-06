/**
 * @description Count the Number of Prime numbers
 * @param GOOGLE - COUNT PRIMES (LeetCode)
 */

let n = 100;
let count = 0;
function checkPrime(num: any) {
  for (let j = 2; j <= Math.floor(num / 2); j++) {
    if (num % j == 0) {
      return false;
    }
  }
  return true;
}
for (let i = 2; i <= n; i++) {
  if (checkPrime(i)) {
    // console.log(i);
    count++;
  }
}
console.log(count);