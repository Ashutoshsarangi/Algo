// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;
const someRecursive = (arr, callBack) => {
  let i = 0;
  const helper = (arr, callBack) =>{
    if(i === arr.length-1){
      return callBack(arr[i]);
    }
    if(callBack(arr[i++]) || helper(arr, callBack)){
    	return true;
    }
  }
  return helper(arr, callBack) ? true : false;
}
console.log(someRecursive([1,2,3,4], isOdd)); // true
console.log(someRecursive([4,6,8,9], isOdd)); // true
console.log(someRecursive([4,6,8], isOdd)); // false
console.log(someRecursive([4,6,8], val => val > 10)); // false
