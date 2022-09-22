function makeRequest(location){
    return new Promise((resolve,reject)=>{
        console.log(`making request to ${location}`)//1
        if (location==="google"){
            resolve("google say hi")//---------------------------- next pro pogythu
        }else{
            reject(`we can talk only to google`)
        }
    })
}


function processRequest(response){
    return new Promise((resolve,reject)=>{
        console.log("processing response")//3
        resolve(`extra information + ${response}`)//4
    });
}


// makeRequest("google").then((response)=>{
//     console.log("response received")//2
//     return processRequest(response)
// }).then(processresponse => {
//     console.log(processresponse)
// }).catch(err=>{
//     console.log(err)
// })

async function dowork(){
   try{
    const response = await makeRequest("google");
    console.log("response received");
    const processresponse = await processRequest(response);
    console.log(processresponse);
   }catch (err) {
    console.log(err)
   }

}
dowork()