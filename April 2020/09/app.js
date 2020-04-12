/**
 * @description Calculate the Highest pick of the Array.
 * @param GOOGLE - FIND PEAK ELEMENT (LeetCode)
 */



let a = [1, 2, 3, 0, 4, 5, 6, 7]

function findPickElement(arr) {
  let temp = 0;
  let pos = -1;
  for (let i = 0; i < arr.length; i++) {
    if (temp < arr[i]) {
      temp = arr[i];
      pos = i;
    }
  }

  return pos;
}

console.log(findPickElement(a));
