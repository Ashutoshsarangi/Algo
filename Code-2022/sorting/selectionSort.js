let arr = [64, 25, 12, 22, 11];


const selectionSort = arr =>{

    for(let i = 0;i< arr.length; i++){
        let item = arr[i];
        let minPos = i;
        for(let j = i+1;j< arr.length; j++){
            if(item > arr[j]){
                item = arr[j];
                minPos = j;
            }
        }
        if(minPos !== i){
            let temp = arr[i];
            arr[i] = arr[minPos];
            arr[minPos] = temp;
        }
    }
    return arr;
}


console.log(selectionSort(arr));
