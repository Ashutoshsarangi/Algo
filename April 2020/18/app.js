/**
 * @description Here we need to find out the Maximum number of ouurance ina n array
 * @param GOOGLE - MAJORITY ELEMENT (LeetCode)
 */

// let arr = [2,2,1,1,1,2,2];
let arr = [3, 2, 3]
let n = Math.floor(arr.length / 2);
let temp = {};
for (let i = 0; i < arr.length; i++) {
  if (temp[arr[i]]) {
    temp[arr[i]] += 1;
  } else {
    temp[arr[i]] = 1;
  }
}
let item = Object.keys(temp);
for (let j = 0; j < item.length; j++) {
  if (temp[item[j]] > n) {
    console.log(item[j]);
    break;
  }
} 
