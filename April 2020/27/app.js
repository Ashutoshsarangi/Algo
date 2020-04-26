/**
 * @description removing back space when # encounters
 * @param GOOGLE - BACKSPACE STRING COMPARE (LeetCode)
 */

//let s= '#ab##c';
// let t = 'ab####c'
// let s = 'ab#c';
// let t = 'ad#c';
// let s = 'ab##';
// let t = 'c#d#';
// let s = 'a##c';
//let t = '#a#c'
let s = 'a#c';
let t = 'b';
function backSpace(str) {
  let temp = str;
  for (let i = 0; i < temp.length; i++) {
    let ind = str.indexOf('#');
    if (ind >= 0) {
      if (ind === 0) {
        str = str.replace(str[ind], '');
      } else {
        str = str.replace(str[ind - 1] + str[ind], '');
      }
    } else {
      return (str);
    }
  }
}
let temps = backSpace(s);
let tempt = backSpace(t);

console.log(temps, tempt);
if (temps === tempt) {
  console.log(true);
} else {
  console.log(false);
}