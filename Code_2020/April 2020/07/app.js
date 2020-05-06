/**
 * @description Find the Unique Element From The Array.
 * @param AMAZON - SINGLE NUMBER (LeetCode)
 */


a = [1, 2, 3, 4, 2, 1, 3, 7];

function singleNumber(arr) {
  let temp = {};
  for (let i = 0; i < arr.length; i++) {
    if (temp[arr[i]]) {
      delete temp[arr[i]];
    } else {
      temp[arr[i]] = 1;
    }
  }
  return Object.keys(temp);
}
console.log(singleNumber(a));