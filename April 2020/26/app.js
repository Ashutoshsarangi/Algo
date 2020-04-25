/**
 *@description Valid parenthesis
 *@param FACEBOOK - VALID PARENTHESES (LeetCode)
 * Noe the Time Complexity = O(n^2logn)
*/

// let arr = '{([]{})}'
// let arr = '{}(){}[]'
// let arr = '{]'
let arr = '([)]'
let openArr = ['{', '(', '['];
let closeArr = ['}', ')', ']'];
let temp = [];
let flag = false;
for (let i = 0; i < arr.length; i++) {
    if (openArr.indexOf(arr[i]) >= 0) {
        temp.push(openArr.indexOf(arr[i]));
    } else {
        let item = temp[temp.length - 1];
        if (item === closeArr.indexOf(arr[i])) {
            flag = true;
            temp.pop();
        } else {
            console.log(false);
            flag = false;
            break;
        }
    }
}
if (flag) {
    console.log(true);
}
