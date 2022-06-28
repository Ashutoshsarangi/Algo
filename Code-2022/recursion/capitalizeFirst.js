const capitalizeFirst = arr =>{
  let result = [];
  const helper = arr =>{
  	if(arr.length === 0){
  		return;
  	}
    result.push(arr[0][0].toUpperCase() + arr[0].slice(1));
  	helper(arr.slice(1));
  }
  
  helper(arr);
  return result;
  
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
