/**
 * @description We need to Figure out what are elements need to be added
 * So that It Will match the Target.
 * @param FACEBOOK - TWO SUM (Leetcode)
 */




// let a = [2, 7, 11, 15];
// let target = 9
let a = [1, 2, 3, 4, 5, 6, 7]
let target = 7

function twoSum(arr) {
  let temp = [];
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] == target) {
      temp.push([i, j]);
      i += 1;
    }
    else if (arr[i] + arr[j] > target) {
      j -= 1;
    } else if (arr[i] + arr[j] < target) {
      i += 1;
    }
  }

  return temp;
}
console.log(twoSum(a));

