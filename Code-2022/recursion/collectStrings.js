const collectStrings = Obj =>{
	const resultArr = [];
   const helper = Obj =>{
     for(let key in Obj){
     	if(typeof(Obj[key]) === 'object'){
        	helper(Obj[key]);
        } else if (typeof(Obj[key]) === 'string'){
        	resultArr.push(Obj[key]);
        }
     }
   }
   helper(Obj);
   return resultArr;
}


const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
