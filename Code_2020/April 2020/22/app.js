/**
 * @description Calculating the Maximum profit 
 * @param FACEBOOK CODING INTERVIEW QUESTION - BEST TIME TO BUY AND SELL STOCK II (LeetCode)
 */

// let arr = [7,1,5,3,6,4];
// let arr = [1,2,3,4,5];
let arr = [7, 6, 4, 3, 1]
let pos = 0;
let item = arr[0];
let max_profit = 0;
for (let i = 1; i < arr.length; i++) {
  if (item > arr[i]) {
    item = arr[i];
    pos = i;
  }
}
console.log(pos);
for (let j = pos + 1; j < arr.length; j++) {
  if (arr[j] - arr[pos] > max_profit) {
    max_profit = arr[j] - arr[pos];
  }
}
console.log(max_profit);
