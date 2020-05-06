/**
 * @description Need to Find out Missing NUmbers
 * @param GOOGLE - FIND ALL NUMBERS DISAPPEARED IN AN ARRAY (LeetCode)
 */
//let arr = [4,3,2,7,8,2,3,1];
let arr = [1, 2, 2, 2, 3];
let temp = {};
let result = [];
let n = arr.length;
for (let i = 0; i < arr.length; i++) {
  if (temp[arr[i]]) {

  } else {
    temp[arr[i]] = 1;
  }
}
console.log(temp);
for (let j = 1; j <= n; j++) {
  if (temp[j]) { }
  else {
    result.push(j);
  }
}
console.log(result);