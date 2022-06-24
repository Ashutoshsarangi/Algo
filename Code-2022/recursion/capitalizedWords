const capitalizedWords = arr => {
  let resultArr = [];
  const helper = arr =>{
  	if(arr.length === 0){
      return;
    }
    resultArr.push(arr[0].toUpperCase());
    helper(arr.slice(1));
  }
  helper(arr);
  return resultArr;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
