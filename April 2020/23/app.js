/**
 * @description Find the Single Number.
 * @param FACEBOOK - SINGLE NUMBER II (LeetCode)

 */

// let arr = [0,1,0,1,0,1,99];
let arr = [1, 2, 2, 2];
let temp = {};
for (let i = 0; i < arr.length; i++) {
  if (temp[arr[i]]) {
    temp[arr[i]] += 1;
  } else {
    temp[arr[i]] = 1;
  }
}
for (let j = 0; j < Object.keys(temp).length; j++) {
  if (temp[Object.keys(temp)[j]] === 1) {
    console.log(Object.keys(temp)[j]);
    break;
  }
}