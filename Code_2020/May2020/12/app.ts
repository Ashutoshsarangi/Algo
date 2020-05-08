/**
 * @description Calculate the Minimum number of coins required to get the sum
 * @param Here in the Video I Learned the 
 * greedy vs Dynamic Vs Recursive Programming
 * @param https://www.youtube.com/watch?v=J2eoCvk59Rc&t=1420s
 */
let coins = [1, 5, 6, 9];
let amount = 10;
let i: any;
let j: any;
let result: any = [];
for (i = 0; i < coins.length; i++) {
  let temp = [];
  temp[0] = 0;
  for (j = 1; j <= amount; j++) {
    if (coins[i] > j) {
      temp[j] = ((i - 1) >= 0 ? result[i - 1][j] : 0);
    } else {
      temp[j] = Math.min(((i - 1) >= 0 ? result[i - 1][j] : 99999),
        1 + temp[j - coins[i]]);
    }
  }
  result.push(temp);
}
console.log(result);
console.log("Total Number of Ways --> ", result[i - 1][j - 1]);