/**
 * @description Find the difference between 2 Strings
 * @param GOOGLE - FIND THE DIFFERENCE (LeetCode)
 */

let s = 'abcd'
let t = 'abecd';
let temp = {};
for (let i = 0; i < s.length; i++) {
  if (temp[s[i]]) { }
  else {
    temp[s[i]] = 1;
  }
}
console.log(temp);
for (let j = 0; j < t.length; j++) {
  if (temp[t[j]]) { }
  else {
    console.log(t[j]);
    break;
  }
}