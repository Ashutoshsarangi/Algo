
/*
Here we need to check if 2 numbers are having the same Frequency of digits or not.

*/

const jsonConverter= (item)=>{
    const temp = {};
    for(const a of item){
        if(temp[a]){
            temp[a] += temp[a]+1;
        }else{
            temp[a] = 1;
        }
    }
    return temp;
}

function sameFrequency(param1, param2){
    param1 = param1.toString();
    param2 = param2.toString();
    // length are not equal for the parameters then just return false
    if(param1.length !== param2.length){
        return false;
    }else{
        // convert these 2 params to json Object and then compare these 2 json Objects
        let jsonParam1 = jsonConverter(param1);
        let jsonParam2 = jsonConverter(param2);

        for(let item in jsonParam1){
            if(jsonParam1[item] != jsonParam2[item]){
                return false;
            }
        }
        return true;
        // Based on that return true/ false
    }
    

}



console.log(sameFrequency(22, 222)); // False
console.log(sameFrequency(182, 218)); // True
console.log(sameFrequency(34, 14)); // False
console.log(sameFrequency(3589578, 5879385)); // True 
console.log(sameFrequency(18, 8)); // False



// Correct
