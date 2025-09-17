 function sum(first: number, second: number) {
    return first + second;
 }
//  let result = sum(10, "10");
//  console.log(`Result value: ${result}, Result type: ${typeof result}`);
 let result = sum(10, 10);
 console.log(`Result value: ${result}, Result type: ${typeof result}`);


 function newSum(first:number ,  second: number | string){
   if(typeof second == 'string'){
      return first + Number.parseInt(second);
   }
   else{
      return first + second;
   }
 }

 let res1 = newSum(20,"10");
 console.log(`Result value :${res1},Result type :${typeof res1}`);
 res1 = newSum(100,10);
 console.log(`Result value ${res1},Result type:${typeof res1}`);


