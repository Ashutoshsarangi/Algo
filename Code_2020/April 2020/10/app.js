/**
 * @description Need to add +1 at the End .
 * @param GOOGLE - PLUS ONE (LeetCode)
 */


// let a = [1, 2, 3, 4];
// let a = [1,2,3,9];
let a = [9, 9, 9, 9];
let temp = [];
let result = [];
function plusOne(arr, ind = a.length - 1, carry = 0) {
  let result = [];
  let sum = 0;
  if (carry) {
    if (ind < 0) {
      sum = carry;
    }
    else {
      sum = arr[ind] + carry;
    }

  } else {
    sum = arr[ind] + 1 + carry;
  }
  if (sum > 9) {
    let item = sum % 10;
    temp.push(item);
    carry = sum / 10;
    plusOne(arr, ind - 1, carry);
  } else {
    temp.push(sum);
    carry = 0;
  }
}
function arrangeResult() {
  plusOne(a);
  if (temp.length > a.length) {
    return temp;
  } else {
    for (let i = a.length - 1 - temp.length; i >= 0; i--) {
      temp.push(a[i]);
    }
    return temp;
  }

}

function resultArr() {
  arrangeResult()
  for (let j = temp.length - 1; j >= 0; j--) {
    result.push(temp[j]);
  }
  return result;
}
console.log(resultArr());