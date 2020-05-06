var sum = 1;
function add(val) {
    temp = val
    while (temp > 0) {
        sum *= temp
        temp -= 1
    }
    console.log(sum)
}
add(4)