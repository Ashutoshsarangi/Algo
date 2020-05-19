/**
 * @description Middle Of Merge Sort 
 * @param Going So Much Depth for the 1st Time.
 * @param Divided Complete Now time to merge
 * Feeling happy for this Algo
 * Finally got An ideas on how Divide and Conqure Algo Works.
 */

// let arr = [101, 1, 0, 5, 9, 3, 0];
// We must Define Another Name Over Here.
let arr = [101, 1, 0, 5, 9, 3, 0, 999, 7, 8, 3, 5];

function Merge(start: number, mid: number, end: number) {
  console.log(arr)
  let L = [];
  let R = [];
  let leftLen = mid - start + 1;
  let rightLen = end - mid;
  for (let i = 0; i < leftLen; i++) {
    L.push(arr[start + i])
  }
  for (let j = 0; j < rightLen; j++) {
    R.push(arr[mid + 1 + j])
  }
  console.log('Left Arr', L);
  console.log('Right Arr', R);
  let i = 0;
  let j = 0;
  let k = start;
  while (i < leftLen && j < rightLen) {
    if (L[i] >= R[j]) {
      arr[k] = R[j];
      j++;
    } else {
      arr[k] = L[i];
      i++;
    }
    k++;
  }
  while (i < leftLen) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < rightLen) {
    arr[k] = R[j];
    j++;
    k++;
  }
  console.log('Intermidiate arr', arr);

}

function MergeSort(start: number, end: number): any {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    MergeSort(start, mid);
    MergeSort(mid + 1, end);
    Merge(start, mid, end);

  }


}

MergeSort(0, arr.length - 1);
console.log(arr);
