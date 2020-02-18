// let user:string = "mike"
//  import { serve } from "https://deno.land/std@v0.30.0/http/server.ts";
// const s = serve({ port: 8080 });
// console.log("http://localhost:8080/");
// for await (const req of s) {
//  req.respond({ body: "Hello World\n" });
//  }

//here is a list of all the primitive types in javascript
//boolean
//Number
//String
//symbol (represents  a unique ,immutable identifier sometimes called a satom)
//Null (0,empty)
//undefined  if x is not given as 3 it is undefined
//BigInt  no float or doubles in javascript only number or bigint

//the other type for javscript is object, functions are object in java
 let user:string= "bob"
 let num:number = 33
 //there are typecasting on certain objects in javascript
// //here, a number is being casted to a string
let numString = num.toString()
console.log(typeof num)