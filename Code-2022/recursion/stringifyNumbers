const stringifyNumbers = Obj =>{
	for(let key in Obj){
    	if(typeof(Obj[key]) === 'number'){
        	Obj[key] = Obj[key].toString();
        } else if(typeof(Obj[key]) === 'object'){
          stringifyNumbers(Obj[key]);
        }
      
    }
  return Obj;
}
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj));

/*
 O/P:-
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
