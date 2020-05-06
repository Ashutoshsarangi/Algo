//The following program is for calculating the consecutive shortes distance in Dyanamic Programming Approach
// with minimum cost.
//Time complexity of the problem is 
/*
Best case it is Less than O(n)
Average Case O(n)
Worst case less than O(n^2)
*/


//var input = [7, 3, 7, 3, 1, 3, 4, 1];//Tested Successfully
var input = [7, 3, 7, 3, 1, 3, 4, 1, 3, 7, 1, 3, 3, 4, 7];//Tested Successfully
var count = 0;
var k = 0;

/**
 * 
 * @param arr this is an Array for calculating the unique values
 * @returns it returns the unique array 
 */
function findUnique(arr) {
    var item = [];
    for (var i = 0; i < arr.length; i++) {
        if (item.indexOf(arr[i]) < 0) {
            item.push(arr[i]);
        }
    }
    return item;
}
var uniqueCity = findUnique(input);
var checkForResult = (tempArr) => {
    var counter = 0;
    for (var j = 0; j < uniqueCity.length; j++) {
        if (tempArr.indexOf(uniqueCity[j]) >= 0) {
            counter += 1;
        }
    }
    if (counter == uniqueCity.length) {
        return true;
    } else {
        return false;
    }
}
/**
 * 
 * @param input this is the main input array from where we need to calculate the shortest distance. 
 */
var findShortestDays = (input, val = 0) => {
    k += 1;
    m = input.length - uniqueCity.length - val + 1;
    for (var i = 0; i < m; i++) {
        var n = uniqueCity.length + i + val;
        var item = [];
        for (var j = i; j < n; j++) {
            item.push(input[j]);
        }
        // console.log(item, '---> ', checkForResult(item))
        if (checkForResult(item)) {
            console.log('Sortest Consecutive path --> ', item.length);
            count += 1;
            break;
        }
    }
    if (count == 0) {
        findShortestDays(input, k);
    }
}
findShortestDays(input);