/**
 * @description Convert Decimal to Binary.
 * It is an INtermidiate Step for Hamming Distance
 */
let num = 0;
function convertBinary(num) {
  if (num == 0) {
    return 0;
  }
  let temp = '';
  let result = '';
  while (num >= 1) {
    temp = temp + (num % 2);
    num = Math.floor(num / 2);
  }
  for (let i = temp.length - 1; i >= 0; i--) {
    result = result + temp[i];
  }
  return result;
}

console.log(convertBinary(num));