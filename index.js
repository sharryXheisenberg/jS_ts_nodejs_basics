"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(first, second) {
    return first + second;
}
//  let result = sum(10, "10");
//  console.log(`Result value: ${result}, Result type: ${typeof result}`);
let result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`);
function newSum(first, second) {
    if (typeof second == "string") {
        return first + Number.parseInt(second);
    }
    else {
        return first + second;
    }
}
let res1 = newSum(20, "10");
console.log(`Result value :${res1},Result type :${typeof res1}`);
res1 = newSum(100, 10);
console.log(`Result value ${res1},Result type:${typeof res1}`);
// second ex
function newAdd(first, second) {
    return first + second; // for this code first + second will get the error to reolve this we need to use as operatir
}
let res = newAdd(10, "10");
console.log(`Result value: ${res}, Result type: ${typeof res}`);
result = sum(10, 10);
console.log(`Result value: ${res}, Result type: ${typeof res}`);
let condition = true;
let person = "Bob";
const age = 40;
let place;
//  console.log("Place value: " + place + " and Type: " + typeof(place) );
// place = "London"
//  console.log("Place value: " + place + " and Type: " + typeof(place) );
// place = null;
//  console.log("Place value: " + place + " and Type: " + typeof(place) );
console.log(`Place value: ${place} and type is ${typeof (place)}`);
// if-else 
let firstName = "Adam";
if (firstName == "Adam") {
    console.log("firstName is Adam");
}
else if (firstName == "Jacqui") {
    console.log("firstName is Jacqui");
}
else {
    console.log("firstName is neither Adam or Jacqui");
}
// equality operator
// the equality operator (==) will attempt to coerce (convert) operands to the same  type to assess equality.
let firstVal = 4;
let secondVal = "4";
if (firstVal == secondVal) {
    console.log("They are equal!");
}
else {
    console.log("They are not!");
}
//logical OR operator (||) has been traditionally used as a null coalescing operator in JavaScript,
let val1;
let val2 = "London";
let val3 = 0;
let coalesced1 = val1 || "fallback value";
let coalesced2 = val2 || "fallback value";
let coalesced3 = val3 || 100;
console.log(`Result 1:${coalesced1}`);
console.log(`Result 2:${coalesced2}`);
// function
function writeValue(val) {
    console.log(`Value:${val ?? "Fallback value"}`);
}
writeValue("USA");
writeValue(null);
// By default, TypeScript will allow functions to be invoked only when the number of arguments matches the number of parameters the function defines
//  The ? character is used to  denote an optional parameter
function newValue(val) {
    console.log(`Value: ${val ?? "Fallback value"}`);
}
newValue("Op");
newValue();
// The ? operator has been applied to the val parameter, which means that the function can be in  voked with zero or one argument. Within the function, the parameter type is string | undefined,  because the value will be undefined if the function is invoked without an argument
//  Defining default parameter values
function unknown(val = "default values") {
    console.log(`Value for default parameter function: ${val}`);
}
unknown("ScaryJod");
unknown();
//  Defining rest parameters
// Rest parameters are used to capture any additional arguments when a function is invoked with 
// additional arguments
function restParametersFunction(val, ...extraInfo) {
    console.log(`Value:${val} , Extras:${extraInfo}`);
}
restParametersFunction("Bro", "How are", "you?");
restParametersFunction("I am fine", "What about you?");
//  Defining functions that return results
// You can return results from functions by declaring the return data type and using the return  keyword within the function body
function composeString(val) {
    return `Composed string :${val}`;
}
console.log(composeString(" Hi,bro!"));
// arrow functions
function getUKCapital() {
    return "London";
}
function writeCity(f) {
    console.log(`City:${f()}`);
} // fat arrow syntax or lambda expression syntax.
writeCity(getUKCapital);
// inline function 
writeCity(() => "Paris");
//  Understanding value closure
//  Functions can access values that are defined in the surrounding code, using a feature called closure
// This is a powerful feature that means you don’t have to define parameters on 
// functions to pass around data values, but caution is required because it is easy to get unexpected 
// results when using common variable names like counter or index, where you may not realize 
// that you are reusing a variable name from the surrounding code
writeCity(() => "NY");
let myNewCity = "Los Santos";
writeCity(() => myNewCity);
// Working with arrays
let myArray = [];
myArray[0] = 100;
myArray[1] = "Adam";
myArray[2] = true;
console.log(myArray);
let newArray = [];
newArray[0] = 100;
newArray[21] = "ksd";
console.log(newArray);
//  Arrays can be restricted to values with specific types
let restrictedArray = [];
restrictedArray[0] = 100;
restrictedArray[1] = "Adam";
restrictedArray[2] = true;
// Arrays can be defined and populated in a single statement
let myOp = [100, "adam", 1];
console.log(myOp);
// Enumerating the contents of an array
let enumeratingArray = [11, 11, "op", false];
for (let i = 0; i < enumeratingArray.length; i++) {
    console.log("Index" + i + " :" + enumeratingArray[i]);
}
console.log("--------");
enumeratingArray.forEach((value, index) => {
    console.log("Index" + index + ": " + value);
});
// Using the spread operator
// The spread operator is used to expand an array so that its contents can be used as function arguments or combined with other arrays
console.log("------");
let examArray = [100, "adam", false];
let otherArray = [...myArray, 22, "njf", true];
otherArray.forEach((value, index) => {
    console.log("Index " + index + ":" + value);
});
