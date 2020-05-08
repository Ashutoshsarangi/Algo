/**
 * @description Here This is a Single Answer for Both The Answers
 * @param Here the time Complexity is O(nlogn)
 * @param Here Space Complexity is ~= O(n) Extra Space.
 * @param There is Another Alogorithm is Available Which 
 * Time Complexity is O(n)
 */

// let arr = [1, 2, 4, 8];
let arr = [1, 9, 4, 8, 7, 6, 2, 5];
let len = 8;
let Max = 9;

function findMissingNumber(arr: Array<number>) {
  let result = [];
  for (let i = 1; i <= Max; i++) {
    if (arr.indexOf(i) >= 0) {

    } else {
      result.push(i);
    }
  }
  return result;
}

console.log(findMissingNumber(arr));