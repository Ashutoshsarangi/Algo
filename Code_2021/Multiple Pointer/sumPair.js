// Multiple Pointer Pattern
/*
    Find The pair of number whose sum is 0 using the multiple pointer pattern
*/
function findsumPair(arr){
    // We need to start a pointer from beginning of the array and another pointer at the end of array
    // we will add the 1st and last number and if the sum is -ve then increment the left pointer, if the sum is +ve then increment the 
    // right counter
    let result = [];
    let i = 0;
    let j = arr.length-1;
//     console.log(i, j);
    while(i < j){
        let sum = arr[i] + arr[j];
//         console.log('Sum-> ' , sum)
        if(sum == 0){
            result.push([arr[i], arr[j]]);
        }
        if(sum > 0){
            j--;
        }
        else{
            i++;
        }
    }
    return result;
}

// console.log(findsumPair([-5,-3,-1,0,1,3,8] )); // -3,3

console.log(findsumPair([-5,-3,-1,0,1,2,8] )); // []