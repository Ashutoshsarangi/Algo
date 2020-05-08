/**
 * @description Sum Of All the Elements are Completed
 * @param here Time Complexity is O(n)
 */
// let array = [1, 2, 4, 8, 'K'];
// let array = [1,9,4,8,7,6,2,5];
let array = [2, 8, 6, 5, 9, 1, 3, 8, 4, 12];

function sumOfAll(arr: any) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) >= 0) {
      sum = sum + arr[i];
    } else {
      return 'Invalid Input';
    }
  }
  return sum;
}

console.log(sumOfAll(array));