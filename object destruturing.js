let aliens1 = {
    name : "pop",
    regNo : 2012505016,
    depatment:"instrumentation engineer",
    cgpa:7.9,
    'campus interview':"failed",
    address:{
        city:"dharmapuri",
        state:"tamil nadu"
    }
};


let aliens2 = {
    food:"pi sapduvaan",
    cgpa:567890
};

// let {name:ennomo,...rest} = aliens2
// console.log(rest);

// let { name:pannikoothi,address:{state="pikooth"}}=aliens2
// console.log(state)

// const person3 = {...aliens1,...aliens2}
// console.log(person3)

// function printUser(user){
//     console.log(`name is: ${user.name}.age is ${user.cgpa}`)
// }

// printUser(aliens1)

function printUser({name,cgpa}){
    console.log(`name is: ${name}.age is ${cgpa}`)
}

printUser(aliens1)

