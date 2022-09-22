/////////////////////for number
// let a = 10;
// let b=a;  ///deep copy
// console.log(a);
// console.log(b);

// let a = 10;
// let b=a;  ///deep copy
// b = 20;
// console.log(a);
// console.log(b);


///////////////////for string

// let s="hello"
// let l = s;
// console.log(l);
// console.log(s);

// let s="hello"
// let l = s;
// l ="welcome"
// console.log(s);
// console.log(l);

///////////////////for array

// let arr1 = [1,2.3,4,5,6]
// let arr2 = arr1  ///shallow copy
// arr1[0] = 1234
// console.log(arr1)
// console.log(arr2)

////////////////spread to overcome above 

// let arr1 = [1,2.3,4,5,6]
// let arr2 = [...arr1]  ///shallow copy
// arr1[1] = 2;
// console.log(arr1);
// console.log(arr2);

///////////////////////object 
// let obj1={
//     name:"pavitharan",
//     age:10
// }
// let obj2=obj1;
// console.log(obj1);
// console.log(obj2);

// let obj1={
//     name:"pavitharan",
//     age:10 ///shallow copy
// }
// let obj2={...obj1}
// obj1.name="peaky blinder"
// console.log(obj1);
// console.log(obj2);

///////////////////////////////////function with array

// function add(a,b){
//     return a+b;
// }

// let arr = [2,4];
// console.log(add(...arr))  ///a value 2,4 nu eduthukom so 2,4,undefined varum let use ...arg use sei

// function add(a,b,...pop){
//     console.log(pop)
//     return a+b;
// }
// let arr = [2,4,5,6,7,8,9];
// console.log(add(...arr));


///////////////////////////////functio with object

// function add(a,b){
//     return a.name+b.name;
// }
// let obj = [{
//     name :"pavithran"
// },{
//     name:"vigneshwaran"
// }]
// console.log(add(...obj));


///example 2
function add(a,b){
    return a.name+b.name;
}
let obj = [{
    name :"pavithran"
},{
    name:"vigneshwaran"
}]
console.log(add(...obj));

