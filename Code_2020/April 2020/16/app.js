/**
 * @description need to find out best time to buy and sell some Porduct.
 * Now my algo is O(n^2)
 * Need to Optimize latter.
 * @param FACEBOOK CODING INTERVIEW QUESTION - BEST TIME TO BUY AND SELL STOCK (LEETCode)
 */


// let arr = [7,1,5,3,2,6];
let arr = [8, 5, 23, 1, 4];
let temp = 0;
let position = '';
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      if (temp < (arr[j] - arr[i])) {
        temp = arr[j] - arr[i];
        position = i + '-' + j;
      }
    }
  }
}
console.log(temp);
console.log(position);