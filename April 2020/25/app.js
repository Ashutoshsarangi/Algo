/**
 * @description Find the juels in the Stone.
 * @param AMAZON - JEWELS AND STONES (LeetCode)
 */
// let j = 'aA';
// let s = 'aAAbbb';
let j = 'z';
let s = 'ZZ';
let temp = {};
let count = 0;
for (let i = 0; i < j.length; i++) {
  temp[j[i]] = 1;
}
for (let k = 0; k < s.length; k++) {
  if (temp[s[k]]) {
    count += 1;
  }
}
console.log(count);