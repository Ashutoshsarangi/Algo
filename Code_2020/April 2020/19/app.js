/**
 * @description Need to Check the Robot moves Origin or not
 * @param AMAZON - ROBOT RETURN TO ORIGIN (LeetCode)
 */

// let s = 'LDDDRL';
// let s = 'LLDD'
let s = 'LRUD'
let LR = 0;
let UD = 0;
for (let i = 0; i < s.length; i++) {
  let temp = s[i];
  if (temp == 'L') {
    LR++;
  } else if (temp == 'R') {
    LR--;
  } else if (temp == 'U') {
    UD++;
  } else if (temp == "D") {
    UD--;
  }
}
if (LR == 0 && UD == 0) {
  console.log(true);
} else {
  console.log(false);
}