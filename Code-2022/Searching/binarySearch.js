const binarySearch = (sortedArr, val) => {
  let start = 0;
  let end = sortedArr.length - 1;
  let mid;
  while(start < end){
  	mid = Math.round((start + end) / 2);
    if(sortedArr[mid] === val){
    	return mid;
    } else if (sortedArr[mid] > val){
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
let arr = [1,2,3,4,5];
let arr2 = [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99]
console.log(binarySearch(arr, 2));
console.log(binarySearch(arr, 3));
console.log(binarySearch(arr, 5));
console.log(binarySearch(arr, 6));
console.log(binarySearch(arr2, 10));
console.log(binarySearch(arr2, 95));
console.log(binarySearch(arr2, 100));
console.log(binarySearch(arr2, 18));
