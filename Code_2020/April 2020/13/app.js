/**
 * @description When we encounter # we need to remove One space.
 * @param GOOGLE - BACKSPACE STRING COMPARE (LeetCode)
 */

// let arr1 = 'ab#c'
// let arr2 = 'ad#c'
// let arr1 = 'ab##'
// let arr2 = 'c#d#'
let arr1 = 'a#c'
let arr2 = 'b'
function backSpaceCompare(arr) {
  let temp = '';
  j = arr.length - 1;
  while (j >= 0) {
    if (arr[j] == '#' && arr[j - 1] == '#') {
      j = j - 4;
    } else if (arr[j] == '#') {
      j = j - 2;
    } else {
      temp = temp + arr[j];
      j = j - 1;
    }
  }
  return temp;
}
if (backSpaceCompare(arr1) == backSpaceCompare(arr2)) {
  console.log(true);
} else {
  console.log(false);
}