// This is Fib with Tabular version 
// This is Buttom Up Approach


const fib = n => {
    const result = [0, 1, 1];
    for(let i = 3; i<= n ;i++){
        result[i] = result[i-1] + result[i - 2];
    }
    return result[n]
};

console.log(fib(6));
