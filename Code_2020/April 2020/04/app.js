/**
 * @description Here If 
 * @param Num%15 --> FizzBuzz
 * @param Num%3  --> Fizz
 * @param Num%5  --> Buzz
 * @param Else Push the Number in the Array. 
 * @param GOOGLE - FIZZ BUZZ (LeetCode)
 */

n = 15
function fizzBuzz(n) {
  let temp = [];
  for (i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      temp.push('fizzBuzz');
    } else if (i % 5 == 0) {
      temp.push('Buzz');
    } else if (i % 3 == 0) {
      temp.push('Fizz');
    } else {
      temp.push(i);
    }
  }
  return temp;
}

console.log(fizzBuzz(n));