const flatten = arr => {
  let resultArr = [];
  const helper = arr =>{
    for(let item of arr){
    	if(typeof(item) === 'object'){
        	helper(item);
        }else if (typeof(item) === 'number'){
          resultArr.push(item);
        }
    }
  }
  helper(arr);
  return resultArr;
}

console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
