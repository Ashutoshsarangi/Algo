// Multiple pointer pattern

function countUniqueVal(arr){
    let result = [];
    // Here we will get sorted array so, 1st pointer will on 1st position and 2nd pointer will be on 2nd position , then if the 
    // 1st pointer and 2nd pointer value is same then we will increment the 2nd pointer.
    // if both the pointers are different then we will assign the second pointer position to 1st pointer and move next.

    let i = 0;
    let j = i+1;
    result.push(arr[i]); // initial element push
    while(j < arr.length){
        if(arr[i] == arr[j]){
            j++;
        }else if(arr[i] != arr[j]){
            result.push(arr[j]);
            i = j;
            j++;
        }
    }
    return result;

}


// console.log(countUniqueVal([-1,-1,-1,2,2,3,3,4,4,5,5]));
// console.log(countUniqueVal([-1,2,3,4,5,5]));
countUniqueVal([0]);