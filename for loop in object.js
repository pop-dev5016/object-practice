// //object
function profile(facebook){
    facebook.forEach(function(lavada){
        console.log(lavada) 
    });
}

let detail = profile([{
    name : "prem",
    regNo : 2012505017,
    depatment:"instrumentation engineer",
    cgpa:9.9,
    'campus interview': "twitter"
}])

// //array
// function profile(faceboo){
//     faceboo.forEach(function(lavad){
//         console.log(lavad) 
//     });
// }

// let detai = profile(["pavitharan",'viki',"nava"])

//for in

// let aliens = {
//     name : "pop",
//     regNo : 2012505016,
//     depatment:"instrumentation engineer",
//     cgpa:7.9,
//     'campus interview':"failed",
//     friend:{
//         name : "prem",
//         regNo : 2012505017,
//         depatment:"instrumentation engineer",
//         cgpa:9.9,
//         'campus interview': "twitter"
//     }

// };

// for(let omma in aliens.friend){
//     console.log(omma,aliens.friend[omma])
// }