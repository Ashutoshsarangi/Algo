/**
 * @description Dynamic programming for Fibonaci Series
 * @param n position of the Series
 * @param It feels Good Now
 * I will Continue the DynamiC Programming Series 
 */


function findFibonaci(n: number) {
  let arr: Array<number> = [];
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

console.log(findFibonaci(20))