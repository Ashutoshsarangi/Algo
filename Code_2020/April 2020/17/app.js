/**
 * @description Find Out the Missing One.
 * This algo takes Extra Memory but O(n).
 * Next time I will focus on the extra memory also.
 * @param  AMAZON - MISSING NUMBER (LeetCode)
 */
let a = {}
let n = 9;
// let arr = [0,3,2,1,5,8,9,4,6];
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < n; i++) {
  a[i] = '1';
}
console.log(a);
for (let j = 0; j < arr.length; j++) {
  delete (a[arr[j]]);
}
console.log(a);
console.log(Object.keys(a)[0]);