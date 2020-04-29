/**
 * @description remove the Duplicate elements without using extra memory and O(n)
 * @param FACEBOOK - REMOVE DUPLICATES FROM SORTED ARRAY (LeetCode)
 * @param My Logic 
 * @returns But the Splice should have its own time complexity.
 */
// let arr = [0,0,0,1,1,1,1,2,3,3,4,4,4,5];
// let arr = [1,1,2];
let arr = [0, 0, 1, 1, 2, 2, 3, 3, 4]
let i = 0;
while (i < arr.length - 1) {
  if (arr[i] == arr[i + 1]) {
    arr.splice(i, 1)
  } else {
    i += 1;
  }
}
console.log(arr);
console.log(arr.length)