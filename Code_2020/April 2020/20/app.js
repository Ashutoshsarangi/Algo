/**
 * @description Calculate the 2nd duplicate.
 * @param GOOGLE - CONTAINS DUPLICATE II (LeetCode)
 */
let arr = [1, 2, 3, 1];
let k = 3;
/* let arr = [1,0,1,1]
 let k = 1 */
/* let arr = [1,2,3,1,2,3]
let k = 2 */
let temp = {};
let flag = true;
for (let i = 0; i < arr.length; i++) {
  if (temp[arr[i]] >= 0) {
    if (i - temp[arr[i]] === k) {
      console.log(true);
      flag = false;
      break;
    } else {
      temp[arr[i]] = i;
    }
  } else {
    temp[arr[i]] = i;
  }
}
if (flag) {
  console.log(false);
}