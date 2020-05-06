/**
 * @description need to remove array elements from the given value.
 * @param AMAZON - REMOVE ELEMENT (LeetCode) 
 */

// let a = [0,1,3,0,12];
// let a = [0,0,0,1,2,3,0,0,0];
// let a = [0, 0, 0, 1, 0, 2, 0, 3, 0, 0, 0];
let a = [0, 1, 2, 2, 3, 0, 4, 2]
let val = 2;
function moveZero(arr, val) {
  let count = 0;
  let j = 0;
  let i = 0;
  let len = arr.length;
  //for(let i=j;i< arr.length;i++){
  while (j < len) {
    if (arr[j] == val) {
      j += 1;
    } else {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i += 1;
      j += 1;
    }
  }
  let k = arr.length - 1;
  while (k > 0) {
    if (arr[k] == val) {
      arr.pop();
      k = arr.length - 1;
    } else {
      k -= 1;
    }
  }
  return arr;
}

console.log(moveZero(a, val));