/*
This would be a basic Hash Functions
*/

const hash = (str, length) => {
    let total = 0;
    for(let i = 0;i<str.length; i++){
        total = (total + str.charCodeAt(i)) % length;
    }
    return total;
}

console.log(hash('pink', 10));
console.log(hash('blue', 10));
console.log(hash('cyan', 10));
