const recursiveRange = num => num === 0 ? 0 : num + recursiveRange(num-1);


console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55 
