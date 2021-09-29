// this is a Frequence Counter pattern

// We need to start with Problem solving approach

/*
UNDERSTANDING PROBELM:-


Simplify the Question:-

there would be 2 array 1 array, consists of number and aother one consists of square of it. 
The Order can be anything but therefrequence should Match

 INput:-

 2 array

 OUTPUT:- 

 return Boolean value

 CREATE CONCREATE EXAMPLE:-


 1. [1,2,4], [16, 4, 1] // true
 2. [1,2,3,4] [16, 9, 4] // false
 3. [1, 2, 1] [1, 4, 4] // false
 4. [1,3,5,3,2,3,5,1] [9,9,9,25,25,4,1,1] // true

BREAK DOWN POINTERS:-


*/
// 


function check(param1, param2){
    // if length of param1 not equal to length of param2
        // we will return as false.

    if(param1.length !== param2.length){
        return false;
    }
    
    // Create 2 Object initialize it
    let firstObj = {};
    let secObj = {};

    // Itertate through param1 and Create the frequence of the param1
        for(let item of param1){
            if(firstObj[item]){
                firstObj[item] += 1; 
            }else {
                firstObj[item] = 1;
            }
        }
//         console.log(firstObj);
    // Iterate through the param2 and create the frequency Object of param2
    for(let val of param2){
        if(secObj[val]){
            secObj[val] += 1;
        }else{
            secObj[val] =  1;
        }
    }
//     console.log(secObj);


    // Iterate through 1 object , there are need to check is the Key and value exist on the other Object or not
    // if all are present then return true 
    // else return false
    for(let temp in firstObj){
        if(secObj[temp ** 2]){
            if(firstObj[temp] !== secObj[temp ** 2]){
                return false;
            }
        }else{
            return false;
        }
    }
    return true;

}

// check([1,2,3], [9,4,1]);
// check([1, 2, 1], [1, 4, 4])
// check([1,3,5,3,2,3,5,1], [9,9,9,25,25,4,1,1]);
check([1,2,3,4], [16, 9, 4]);
