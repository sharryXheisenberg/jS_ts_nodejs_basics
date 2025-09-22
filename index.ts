 function sum(first: number, second: number) {
    return first + second;
 }
//  let result = sum(10, "10");
//  console.log(`Result value: ${result}, Result type: ${typeof result}`);
 let result = sum(10, 10);
 console.log(`Result value: ${result}, Result type: ${typeof result}`);


function newSum(first:number,second:string|number){
   if(typeof second=="string"){
      return first + Number.parseInt(second);
   }else{
      return first+second;
   }
}


 let res1 = newSum(20,"10");
 console.log(`Result value :${res1},Result type :${typeof res1}`);
 res1 = newSum(100,10);
 console.log(`Result value ${res1},Result type:${typeof res1}`);

 // second ex
 function newAdd(first:number,second:string|number){
   
      return first + (second as any); // for this code first + second will get the error to reolve this we need to use as operatir
  
}
let res = newAdd(10, "10");
 console.log(`Result value: ${res}, Result type: ${typeof res}`);
 result = sum(10, 10);
 console.log(`Result value: ${res}, Result type: ${typeof res}`);

 let condition:boolean = true;
 let person:string = "Bob";
 const age:number = 40;

 let place: string | undefined | null;

//  console.log("Place value: " + place + " and Type: " + typeof(place) );
// place = "London"
//  console.log("Place value: " + place + " and Type: " + typeof(place) );
// place = null;
//  console.log("Place value: " + place + " and Type: " + typeof(place) );

console.log(`Place value: ${place} and type is ${typeof(place)}`)

// if-else 
   let firstName = "Adam";
 if (firstName == "Adam") {
    console.log("firstName is Adam");
 } else if (firstName == "Jacqui") {
    console.log("firstName is Jacqui");
 } else {
    console.log("firstName is neither Adam or Jacqui");
 }

 // equality operator
 // the equality operator (==) will attempt to coerce (convert) operands to the same  type to assess equality.
 let firstVal:any =4;
 let secondVal:any = "4";
 if(firstVal==secondVal){
  console.log("They are equal!"); 
 }else{
   console.log("They are not!");
 }

//logical OR operator (||) has been traditionally used as a null coalescing operator in JavaScript,

  let val1: string | undefined;
 let val2: string | undefined = "London";
 let val3: number | undefined = 0;

  let coalesced1 = val1 || "fallback value";
 let coalesced2 = val2 || "fallback value";
 let coalesced3 = val3 || 100;

 console.log(`Result 1:${coalesced1}`);
 console.log(`Result 2:${coalesced2}`);

 
