/**
 * @description Finding Min1 and Min2 Uisng divide and Conqure Algorithm
 */
// let arr = [10, 5, 3, 2, 1, 0, 99];
let arr = [101, 1, 0, 5, 9, 3, 0];
/**
 * @Description Slice (start, end)
 * start --> represents the Index
 * end--> Nth number of Element
 * It is not return a new Array
 */

// Now It is Buggy Algorithm
let min2 = 9999;
let min1 = 99999;
let minF1 = 99999;
let minF2 = 9999;
function findGrandmaxMin(start: number, mid: number, end: number) {
  let L = arr.slice(start, mid + 1);
  let R = arr.slice(mid + 1, end + 1)
  console.log(L, R)
  let min1L;
  let min2L;
  let min1R;
  let min2R;
  min1L = L[0];
  min2L = L[0];
  min1R = R[0];
  min2R = R[0];
  for (let i = 1; i < L.length; i++) {
    if (min1L > arr[i]) {
      min1L = arr[i];
    }
    if (arr[i] > min1L) {
      min2L = arr[i]
    }
  }
  console.log(min1L, min2L);
  for (let j = mid; j < R.length; j++) {
    if (min1R > arr[j]) {
      min1R = arr[j];
    }
    if (arr[j] > min1R) {
      min2R = arr[j]
    }
  }
  console.log(min1R, min2R)

  //   if (min1L > min1R) {
  //     min1 = min1R
  //   } else {
  //     min1 = min1L
  //   }

  //   if (min2L > min1) {
  //     min2  = min2L
  //   }
  //   if (min2R > min1) {
  //     min2 = min2R
  //   }
  //   if (minF1 > min1) {
  //     minF1 = min1;
  //   }
  //   if (minF2 > min2) {
  //     minF2 = min2
  //   }
  //   console.log(minF1, minF2)
}

function findMaxMin(start: number, end: number) {
  if (end - start > 1) {
    let mid = Math.floor((start + end) / 2);
    findMaxMin(start, mid);
    findMaxMin(mid + 1, end);
    // console.log(arr[start], arr[end]);
    // console.log(start,mid, end);
    findGrandmaxMin(start, mid, end);

  }
}
findMaxMin(0, arr.length - 1)