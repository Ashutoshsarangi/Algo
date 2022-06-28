// Boubble Sort | Optimization with No Swap

const bubbleSortOptimized = (arr, ascending=false) =>{
  let noSwap;
  let count = 0;
    for(let i = 0;i< arr.length;i++){
      noSwap = true;  
      for(let j = 0; j< arr.length-i; j++){
            if(ascending){
                if(arr[j] > arr[j+1]){
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                  	noSwap = false;
                  count++;
                }
            }
        }
      if(noSwap) break;
    }
  console.log('Optimization Count ---> ',count);
    return arr;
}
const bubbleSort = (arr, ascending=false) =>{
  let noSwap;
  let count = 0;
    for(let i = 0;i< arr.length;i++){
      noSwap = true;  
      for(let j = 0; j< arr.length-i; j++){
            if(ascending){
                count++;
                if(arr[j] > arr[j+1]){
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                  	noSwap = false;
                }
            }
        }
    }
  console.log('No Swap count ---> ',count);
    return arr;
}

console.log(bubbleSortOptimized([8,1,2,3,4,5,6,7,8,9], true));
console.log(bubbleSort([8,1,2,3,4,5,6,7,8,9], true));
