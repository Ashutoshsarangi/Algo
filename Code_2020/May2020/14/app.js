/**
 * @description Sort an Array Based on frequency.
 * Here I Generated the Json Object
 * @param GOOGLE - SORT CHARACTERS BY FREQUENCY (LeetCode)
 */
let arr = {
  c: 4,
  a: 1,
  b: 2,
  d: 1,
  e: 5
}
// console.log(arr[0]);
let keys = Object.keys(arr);
for (let i = 0; i < keys.length; i++) {
  let min = keys[i];
  for (let j = i + 1; j < keys.length; j++) {
    if (arr[min] < arr[keys[j]]) {
      min = keys[j];
    }
  }
  if (min !== keys[i]) {
    let tmp = arr[keys[i]];
    arr[keys[i]] = arr[min];
    arr[min] = tmp;
  }
}
console.log(arr);
let result = '';
for (let k = 0; k < Object.keys(arr).length; k++) {
  result = result + Object.keys(arr)[k];
}
console.log(result)
