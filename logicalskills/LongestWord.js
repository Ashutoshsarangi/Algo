var len = 0
var item = ''
var a = "a confusing /:sentence:/[ this is not!!!!!!!~"
var b = 'I love dogs'
var c = "fun&!!! time"
pattern = /[^a-z\s]/ig
arr = a.replace(pattern, '')
arr = arr.split(' ')
arr.forEach((value) => {
    if (len < value.length) {
        len = value.length
        item = value
    }
})
console.log(item)

//CoderByte