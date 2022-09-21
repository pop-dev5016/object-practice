let alpahabet = ['A','B','C','D','E','F']
let number = ['1','2','3','4','5','6']

// let [a,b,c,d,e,f] = alpahabet;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
 
// let [a,b,...rst] = alpahabet;
// console.log(rst)

// const newArray = [...alpahabet,...number]
// console.log(newArray)

function sumandmultiple (a,b){
    return [a+b,a*b]
}

let [sum,multiply] = sumandmultiple(6,7)
console.log(sum);
console.log(multiply);