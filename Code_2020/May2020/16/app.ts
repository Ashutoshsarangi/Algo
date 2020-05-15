/**
 * @Description Calculate the MAx and MIn Both
 * From an Array
 * @param Lecture 5 DAA.
 * @param My Algo
 */

let arr = [1, 2, 56, 0, 2, 3, 46, 7, 8, 9, -5];
let max = arr[0];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
  if (max < arr[i]) {
    max = arr[i];
  }
}

console.log(max, min);