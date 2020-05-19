/**
 * @description Middle Of Merge Sort 
 * @param Going So Much Depth for the 1st Time.
 * @param Divided Complete Now time to merge
 */

let arr = [101, 1, 0, 5, 9, 3, 0];

function MergeSort(arr: any, start: number, end: number): any {
  if (start >= end) {
    return arr[start]
  } else {
    let mid = Math.floor((start + end) / 2);
    let left = MergeSort(arr, start, mid);
    let right = MergeSort(arr, mid + 1, end);
    console.log('Left', left);
    console.log('Right', right);
    if (left > right) {

    }
  }


}

MergeSort(arr, 0, arr.length - 1);
