/**
 * @description Find the nth Height Number
 * @param GOOGLE CODING INTERVIEW QUESTION - KTH LARGEST ELEMENT IN AN ARRAY (LeetCode)
 * @returns My Logic
 */

let arr = [1, 3, 4, 0, 9, 76, 4];
let k = 2;

arr.sort(function (a, b) {
  return b - a;
});
console.log(arr);
console.log(arr[k - 1])