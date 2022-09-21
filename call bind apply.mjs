import { workerData } from "worker_threads";

////////////////////////////call----
// let obj = {
//     num:2
// }
// let addtothis = function(a){
//     return obj.num+a
// };
// //addtothis.call(obj,3)functionname.call(obj,functionargument));
// console.log(addtothis.call(obj,3));
//////////////increase argument

///////////////////////////////////call----
// let obj = {
//     num:2
// }
// let addtothis = function(a,b,c){
//     return this.num+a+b+c;
// };
// //addtothis.call(obj,3)functionname.call(obj,functionargument));
// console.log(addtothis.call(obj,1+2+3));
/////////////////////////////////////////////////homm work
let detail = {
    name:"pavithran",
    work:"unemployment",
    years:2016
}

let word = function(nowyear){
    return this.years-nowyear;
}

console.log(word.call(detail,2022));

let word1=function(word){
   return (`hi ${this.name} !your are still ${this.work} ohh when you are finish degree${this.years}`);
}

console.log(word1.call(detail));


let word1=function(word){
    return (`hi ${this.name} !your are still ${this.work} ohh how amny years u are unemployment nearly ${word-this.years} `);
 }
 
 console.log(word1.call(detail,2022));


/////////////////////////////call and apply--------------

// let obj = {
//     num:2
// }
// let obj2 = {
//     num:56
// }
// let addtothis = function(a,b,c){
//     return this.num+a+b+c;
// };
// //addtothis.call(obj,3)functionname.call(obj,functionargument));
// var arr = [5,6,7]
// console.log(addtothis.apply(obj,arr));
// console.log(addtothis.apply(obj2,arr));

///////////////////////////////////////bind
// let obj = {
//     num:2
// }
// let addtothis = function(a,b,c){
//     return this.num+a+b+c;
// };
// //addtothis.call(obj,3)functionname.call(obj,functionargument));
// var arr = [5,6,7]
// console.log(addtothis.bind(obj,arr));


////////////// i undesrstand bind now do exmple if forgot refer note

// let deatils={
//     name:"pavithran",
//     school:"stanley",
//     schoolstart:1998,
//     clg:"mit",
//     clgstart:2012 
// }



// let deatils1={
//     name:"vigneshwaran",
//     school:"viyamandir",
//     schoolstart:1997,
//     clg:"gvmc",
//     clgstart:2012 
// }

// let word = function(a,b,c){
//     return (`my name is ${this.name} i am schooling in ${this.school} nearly ${this.schoolstart+a} years and start my college in ${this.clg} studied nearly${this.clgstart+b} but i wont get empolyed nearly ${this.unempolyment=2017+c}years  `)
// }

// let para = word.bind(deatils)
// console.log(para(-2012,-2016,-2022))

// let para1 = word.bind(deatils1)
// console.log(para1(-2011,-2016,-2022))



