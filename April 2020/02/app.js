/**
 * @description Check is the Given Number power of 2 or not.
 * @param 218 --> False
 * @param 16 --> true
 */


let a = 218;
function powerOfTwo(num) {
  let temp = num;
  if (temp == 0) {
    console.log(false);
  }
  else if (temp == 1) {
    console.log(true);
  }
  else {
    if (temp % 2 == 0) {
      temp = num / 2;
      powerOfTwo(temp);
    } else {
      console.log(false);
    }
  }
}
powerOfTwo(a);
