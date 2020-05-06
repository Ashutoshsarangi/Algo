//The following program is for calculating the consecutive shortes distance
// with minimum cost.
//Time complexity of the problem is O(n^2)

//var input = [7, 3, 7, 3, 1, 3, 4, 1]; // Working as Intended.
//var input = [1, 1, 3, 4, 5, 6, 4, 1]; // Working as Intended.
var input = [7, 3, 7, 3, 1, 3, 4, 1];


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
/**
 * This is the global variable for storing the path i.e source to destination
 * and in cost is for storing the cost needed for travelling from the source to destination.
 */
var mainVal = {
    path: [],
    cost: []
};
/**
 * 
 * @param input this is the main input array from where we need to calculate the shortest distance. 
 */
var findShortestDays = (input) => {
    for (var i = 0; i < input.length; i++) {
        var temp = [...uniqueCity]
        for (var j = i; j < input.length; j++) {
            if (temp.length) {
                if (temp.indexOf(input[j]) >= 0) {
                    temp.splice(temp.indexOf(input[j]), 1)
                }
            } else {
                mainVal.path.push(i + '-' + (j - 1));
                mainVal.cost.push(j - i);
            }
        }
    }
}
findShortestDays(input);
var cost = Math.min(...mainVal.cost);
var path = mainVal.path[mainVal.cost.indexOf(cost)];
console.log('The Shortest Distance is ---> ', cost)
console.log('The Shortest Path from Source to Destination is ---> ', path)