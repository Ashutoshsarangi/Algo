/**
 * @description Need to Sort the Array Based ON Priority
 * @param Even One should higher Priority and Odd One Less Priority
 * @param AMAZON - SORT ARRAY BY PARITY (LeetCode)
 */

// let arr = [1, 5, 6, 3, 9, 2, 0, 339];
let arr = [0, 8, 66, 56, 999, 0, 8, 678, 45, 97, 0];
let i = 0;
let j = arr.length - 1;
function swap(i: number, j: number) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

}
while (i < j) {
    if (arr[i] % 2 == 0) {
        i++;
    }
    if (arr[j] % 2 != 0) {
        j--;
    }
    if (arr[i] % 2 != 0 && arr[j] % 2 == 0) {
        swap(i, j);
        i++;
        j--;
    }
}
console.log(arr);