/**
 * @description remove the Duplicate elements without using extra memory and O(n)
 * @param FACEBOOK - REMOVE DUPLICATES FROM SORTED ARRAY (LeetCode)
 * @param Expert Logic 
 * @returns But I am not Happy with the Array.
 */
let arr = [0, 0, 0, 1, 1, 1, 1, 2, 3, 3, 4, 4, 4, 5];
//let arr = [1,1,2];
//let arr = [0,0,1,1,2,2,3,3,4]
let ind = 1;
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] !== arr[i + 1]) {
    console.log('1');
    arr[ind] = arr[i + 1];
    ind += 1;
  }
}
console.log(ind);
