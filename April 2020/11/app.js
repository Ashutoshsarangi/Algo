/**
 * @description Need to Move 0 in to End Can't create a Copy of an Arry.
 * @param FACEBOOK - MOVE ZEROES (LeetCode)
 */

// let a = [0,1,3,0,12];
// let a = [0,0,0,1,2,3,0,0,0];
let a = [0, 0, 0, 1, 0, 2, 0, 3, 0, 0, 0];
function moveZero(arr) {
  let count = 0;
  let j = 0;
  let i = 0;
  let len = arr.length;
  //for(let i=j;i< arr.length;i++){
  while (j < len) {
    if (arr[j] == 0) {
      j += 1;
    } else {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i += 1;
      j += 1;
    }
  }
  return arr;
}

console.log(moveZero(a));