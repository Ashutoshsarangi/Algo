var c = 'hello world*3'
var d = "fun times!"
var e = "a confusing /:sentence:/[ this is not!!!!!!!~."
"b dpOgvtjOh /:tfOUfOdf:/[ UIjt jt OpU!!!!!!!~."
var arr = ['a', 'e', 'i', 'o', 'u']
arr2 = e.split('')
var arr3 = []
for (let i = 0; i < arr2.length; i++) {
    if (/[a-zA-Z]/.test(arr2[i])) {
        var temp = String.fromCharCode(arr2[i].charCodeAt(0) + 1)
        if (arr.indexOf(temp) > -1) {
            arr3.push(temp.toLocaleUpperCase())
        }
        else {
            arr3.push(temp)
        }
    }
    else {
        arr3.push(arr2[i])
    }
}
console.log(arr3.join(''))