/*
PROBLEM SOLVING PATTERN :- FREQUENCY COUNT

PROBLEM SOLVING APPROACH:-

1. UNDERSTANDING CONTEXT

a. We will have 2 inputs we need to check the ouurance of 1st string must be equal to 2nd string, then it would be called as ANAGRAM
 
2. EXPLORRE CONCRETE EXAMPLE
checkAnagram('string', 'gtingrs') // false
checkAnagram('string', 'tinprs') // false
checkAnagram('helloworld', 'wlrodlleho')// true

3. BREAK DOWN
Need to write the base line algo

*/

function checkAnagram(param1, param2){
    //if the Length of these 2 param are different then we can return false
    if(param1.length !== param2.length){
        return false;
    }
    // we need to create 2 Object for 2 param initialize with {}
    let firstObj = {};
    let secObj = {};
    // Iterrate through Each Param and update the Objects.
    for(let char of param1){
        if(firstObj[char]){
            firstObj[char] += 1;
        }else{
            firstObj[char]= 1;
        }
    }

    for(let item of param2){
        if(secObj[item]){
            secObj[item] += 1;
        }else{
            secObj[item] =1;
        }

    }
    // we need to check the key and its frequency of 1st Object should be same as 2nd Object
    // Key and value pair must be same. 
    for(let temp in firstObj){
        if(firstObj[temp]!== secObj[temp]){
            return false;
        }
    }
    return true;
}

// checkAnagram('string', 'gtingrs');
checkAnagram('string', 'tinprs');
// checkAnagram('helloworld', 'wlrodlleho')