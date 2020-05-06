/**
 * @description Checking the Monotonic Array
 * @param FACEBOOK - MONOTONIC ARRAY (LeetCode)
 * @param Export Logic
 */
let arr = [1, 2, 2, 3];
//let arr = [1,1,1,1];
//let arr = [6,5,4,4];
//let arr = [1,3,2];
// let arr = [1,2,4,5];
function monotonicArray(arr) {
  let increaseFlag = true;
  let decreaseFlag = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      decreaseFlag = false
    }
    if (arr[i] > arr[i + 1]) {
      increaseFlag = false;
    }
  }
  return increaseFlag || decreaseFlag;
}

console.log(monotonicArray(arr));