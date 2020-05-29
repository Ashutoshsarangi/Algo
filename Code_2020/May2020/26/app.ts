/**
 * @description revised CharCodeAt Function
 * @param GOOGLE - DETECT CAPITAL (LeetCode)
 */
let s = 'AsghdsjfasdgashgdjasdS'
let count = 0;
const len = s.length;
function isUpperCase(char: any) {
  if (s.charCodeAt(char) >= 65 && s.charCodeAt(char) <= 90) {
    return true;
  } else {
    return false;
  }
}
for (let char in s) {
  if (isUpperCase(char)) {
    count++;
  }
}
console.log(count === len || count === 0 || count === 1 && isUpperCase(0));