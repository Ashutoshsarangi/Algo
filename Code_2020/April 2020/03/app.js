/**
 * @description Need to find out the duplicate 
 * if yes 
 *     return true. 
 * else 
 *     return false
 * @param GOOGLE - CONTAINS DUPLICATE (LeetCode)
 */



/* a = [1,2,3,4,3,2,1,7]; */
a = [1, 2, 3, 4, 7];
function containDuplicate(arr) {
  let temp = {};
  let duplicate = false;
  for (let i = 0; i < arr.length; i++) {
    if (temp[arr[i]]) {
      duplicate = true;
      return true;
    } else {
      temp[arr[i]] = 1;
    }
  }
  if (!duplicate) {
    return false;
  }
}

console.log(containDuplicate(a));