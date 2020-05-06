/**
 * @description Checking the Monotonic Array
 * @param FACEBOOK - MONOTONIC ARRAY (LeetCode)
 * @param My Logic
 */
// let arr = [1,2,2,3];
// let arr = [1,1,1,1];
// let arr = [6,5,4,4];
// let arr = [1,3,2];
let arr = [1, 2, 4, 5];
function monotonicArray(arr) {
  let start = arr[0];
  let end = arr[arr.length - 1];
  let flag = '';
  let resultFlag = false;
  if (start >= end) {
    flag = '-';
  } else {
    flag = '+';
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (flag === '+') {
      if (arr[i] <= arr[i + 1]) {
        resultFlag = true;
      } else {
        resultFlag = false;
        return resultFlag;
      }
    } else {
      if (arr[i] >= arr[i + 1]) {
        resultFlag = true;
      } else {
        resultFlag = false;
        return resultFlag;
      }
    }
  }
  return resultFlag;
}

console.log(monotonicArray(arr));