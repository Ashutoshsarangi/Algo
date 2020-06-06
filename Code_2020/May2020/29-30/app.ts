/**
 * @description Finding Min and Max Uisng divide and Conqure Algorithm
 */
// let arr = [10, 5, 3, 2, 1, 0, 99];
let arr = [101, 1, 0, 5, 9, 3, 0];
/**
 * @Description Slice (start, end)
 * start --> represents the Index
 * end--> Nth number of Element
 * It is not return a new Array
 * 
 */
let max = -9999;
let min = 9999;
let maxF = -9999;
let minF = 9999;
function findGrandmaxMin(start: number, mid: number, end: number) {
  let L = arr.slice(start, mid + 1);
  let R = arr.slice(mid + 1, end + 1)
  console.log(L, R)
  let minL;
  let maxL;
  let minR;
  let maxR;
  minL = L[0];
  maxL = L[0];
  minR = R[0];
  maxR = R[0];
  for (let i = 1; i < L.length; i++) {
    if (minL > arr[i]) {
      minL = arr[i];
    }
    if (maxL < arr[i]) {
      maxL = arr[i]
    }
  }
  for (let j = 1; j < R.length; j++) {
    if (minR > arr[j]) {
      minR = arr[j];
    }
    if (maxR < arr[j]) {
      maxR = arr[j]
    }
  }
  if (minL > minR) {
    min = minR;
  } else {
    min = minL;
  }

  if (maxL > maxR) {
    max = maxL;
  } else {
    max = maxR;
  }

  if (minF > min) {
    minF = min;
  }
  if (maxF < max) {
    maxF = max
  }
  console.log(maxF, minF)
}

function findMaxMin(start: number, end: number) {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    findMaxMin(start, mid);
    findMaxMin(mid + 1, end);
    // console.log(arr[start], arr[end]);
    // console.log(start,mid, end);
    findGrandmaxMin(start, mid, end);

  }
}
findMaxMin(0, arr.length - 1)