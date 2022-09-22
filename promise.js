// let p = new Promise (function(resolve,reject){
//     let a = 1+10
//     if(a==2){
//         resolve("success")
//     }else{
//         reject("failed")
//     }
// })

// p.then(function(message){
//     console.log("this is in the then "+message);
// }).catch(function(message){
//     console.log("this is in the then "+message);
// })


// let p = new Promise ((resolve,reject)=>{
//     let a = 1+1
//     if(a==2){
//         resolve("success")
//     }else{
//         reject("failed")
//     }
// })

// p.then((message)=>{
//     console.log("this is in the then "+message);
// }).catch((message)=>{
//     console.log("this is in the then "+message);
// })


// example1.1

// let user = true;
// let watchingmeme = false;



// function watctutorials(){
//     return new Promise((resolve,reject) =>{
//     if (user){
//         reject({
//             name:'pavithran',
//             message:':)'
//         })
//     }else if (watchingmeme){
//         reject({
//             name:"user watching vijay movie",
//             message:"websimpliefird>parithabangal"
//         })
//     }else{
//         resolve ("thumbup &subscribe")
//     }
// });
// }

// watctutorials().then((message)=>{
//     console.log("sucess "+ message)
// }).catch((error)=>{
//     console.log(error.name+" "+error.message)
// })

let song1 = new Promise((resolve,reject)=>{
    resolve ("song 1 recorded")
})

let song2 = new Promise((resolve,reject)=>{
    resolve ("song 2 recorded")
})

let song3 = new Promise((resolve,reject)=>{
    resolve ("song 3 recorded")
})


Promise.race([
    song1,
    song2,
    song3
]).then ((message)=>{
    console.log(message)
})

