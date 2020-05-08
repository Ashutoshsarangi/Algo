/**
 * @description Dynami cprogramm for Total Number of Ways To get the Total AMount
 * @param Coin Change Problem Number of ways to get total | Dynamic Programming | Algorithms
 */

let coins = [2, 3, 5, 10];
let amount = 15;
let i: any;
let j: any;
let result: any = [];
for (i = 0; i < coins.length; i++) {
  let temp = [];
  temp[0] = 1;
  for (j = 1; j <= amount; j++) {
    if (coins[i] > j) {
      temp[j] = ((i - 1) >= 0 ? result[i - 1][j] : 0);
    } else {
      temp[j] = ((i - 1) >= 0 ? result[i - 1][j] : 0)
        + temp[j - coins[i]];
    }
  }
  result.push(temp);
}
console.log(result);
console.log("Total Number of Ways --> ", result[i - 1][j - 1]);