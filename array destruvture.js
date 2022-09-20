// let nums = [5,2,3,4,2]
// console.log(nums);

// // let [a,b,c,d] = nums;
// // console.log(d);


// let [a,b,,d] = nums;
// console.log(d);


// let num1 = 2;
// let num2 = 3;

// [num1,num2]=[num2,num1]

// console.log(num1,num2);


// let word = "my name is pop born unlucky".split(" ")
// console.log(word)

let word = "my name is pop born unlucky is my life".split(" ")
let [a,b,c,d,...f]= word
console.log(f)