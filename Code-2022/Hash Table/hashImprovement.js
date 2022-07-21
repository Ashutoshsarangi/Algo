/*
This would be a basic Hash Functions Improvement
*/

const hashImprovement = (str, length) => {
    let total = 0;
    let prime = 47;
    for(let i = 0;i<Math.min(str.length, 100); i++){
        total = (total + prime +str.charCodeAt(i)) % length;
    }
    return total;
}

console.log(hashImprovement('pink', 31));
console.log(hashImprovement('blue', 31));
console.log(hashImprovement('cyan', 31));
