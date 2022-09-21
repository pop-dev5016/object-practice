// //callbacks

// function firstfunction(parameters,callbacks){
//     //do some stuff
//     callbacks()
// }

// // aka callback hell

// firstfunction(parameters,function(){
//     //do stuff
//     secondfunction(parameters,function(){
//         thirdfunction(parameters,function(){

//         })
//     })
// })

// // this is fucking hell


////let we go promise it has 3 state:pending,fullfilled,rejected



// let myPromise = new Promise((resolve,reject)=>{
//     let error = false;
//     if(!error){
//         resolve("yes!resolver the promise!")
//     }else{
//         reject("No,reject the promise")
//     }
// })

// myPromise.then((message)=>{
//     console.log(message + 1);
// }).catch((poppy)=>{
//     console.log(poppy);
// })



///some example why use promise....
////let see promise is more dynamic


// let myPromise = new Promise((resolve,reject)=>{
//     let error = false;
//     if(!error){
//         resolve("yes!resolver the promise!")
//     }else{
// //         reject("No,reject the promise")
// //     }
// // })

// // let mynextpromise = new Promise((resolve,reject)=>{
// //     setTimeout(function(){
// //         resolve("my nextpromise is resolved i am callback");
// //     },3000);
// // });

// //  mynextpromise.then((message)=>{
// //     console.log(message)
// //  });

// //  myPromise.then((message)=>{
// //     console.log(message)
// //  });


//  ///another state pending
// import fetch from "node-fetch";
// //  const users = fetch("https://jsonplaceholder.typicode.com/users");
// //  //pending
// //  console.log(users);

// //  const users = fetch("https://jsonplaceholder.typicode.com/users")
// //      .then((response)=>{
// //         return response.json();
// //      })
// //      .then((data)=>{
// //         data.forEach((user)=>{
// //             console.log(user);
// //         })
// //      });

// //      console.log(users);


//      /// aysnc /await
// const myUser ={
//     userlist:[]
// }
//     // async function mycoolfunction(){

//     // }

//     const mycoolfunction = async () => {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const jsonuserdata = await response.json();
//         //console.log(jsonuserdata);
//         return jsonuserdata;
//     }

//     mycoolfunction()

//     const anotherfunc = async()=>{
//        const data =  await mycoolfunction();
//        myUser.userlist = data;
//        console.log(myUser.userlist);  

//     }

//     anotherfunc();
//     console.log(myUser.userlist);

    //work flow
  ////// import fetch from "node-fetch";


   ///ans came but not clear
//    const getallUserEmail = async () =>{
//    const response = await fetch("https://jsonplaceholder.typicode.com/users")
//    const jsonuserdata = await response.json();
//    const userEmailArray = jsonuserdata.map(user=>{
//     return user.email;
//    });


//    console.log(userEmailArray)
//    }
//    getallUserEmail()

   //// call panrathu function veliya iruntha athu wai pannathu da  refer 144
    
//    const getallUserEmail = async () =>{
//             const response = await fetch("https://jsonplaceholder.typicode.com/users")
//             const jsonuserdata = await response.json();
//             const userEmailArray = jsonuserdata.map(user=>{
//             return user.email;
//             });
 
 
//    /// console.log(userEmailArray)
//    return userEmailArray;
//     }
//     console.log(getallUserEmail());

    ///// work flow 

//     const getallUserEmail = async () =>{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const jsonuserdata = await response.json();
//         const userEmailArray = jsonuserdata.map(user=>{
//         return user.email;
// });
//         postToWebsite(userEmailArray)

// }
// const postToWebsite = (data)=>{
//       console.log(data);
// }

// getallUserEmail();  /// ans came


//////////////////////////second parameter of fetch is object

// const getDadjoke = async () => {
    
//     const response = await fetch("https://icanhazdadjoke.com/",{
//         method : 'GET',
//         headers : {
//             accept:"application/json"
//         }
//     });
//     const jsonjokedata = await response.json();
//     console.log(jsonjokedata);
// }

// getDadjoke();

/////////////////////////////////////////////////////
// const getDadjoke = async () => {
    
//     const response = await fetch("https://icanhazdadjoke.com/",{
//         method : 'GET',
//         headers : {
//             accept:"text/plain"
//         }
//     });
//     const textjokedata = await response.text();
//     console.log(textjokedata);
// }

// getDadjoke();
/////////////////////////////////////////////////////////////post data
// const jokeobject = {
//     id: '5oWLeFdxkjb',
//     joke: "When is a door not a door? When it's ajar.",
//   }


//   const postdata = async (jokeobject) => {
    
//     const response = await fetch("https://httpbin.org/post",{
//         method : 'POST',
//         headers : {
//             "content-type":"application/json"
//         },
//         body:JSON.stringify(jokeobject)
//     });
//     const jsonresponse = await response.json();
//     console.log(jsonresponse.headers);
// }

//  postdata(jokeobject);

///////////////////////////
//  const requestJoke = async(firstName,lastName) => {
//     const response = await fetch(`https://api.icnbd.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);
//     const jsonresponse = await response.json();

//     console.log(jsonresponse.value.joke);
//  }

//  requestJoke("Bruce","Lee");

////////////////////////// abstract into function
// may be from a form
import fetch from "node-fetch";
const getDataFromForm =()=>{
    const requestobj = {
        firstNAme:"Bruce",
        lastName:"lee",
        Categories:["nerdy"]
    };
    return requestobj;
    }
 

    const buildRequesturl = (requestdat)=>{
        return `https://api.icnbd.com/jokes/random?firstName=${requestdat.firstName}&lastName=${requestdat.lastName}&limitTo=${requestdat.Categories}`;
    }

    const requestJoke = async(url) => {
            const response = await fetch(url);
            const jsonresponse = await response.json();
            const joke = jsonresponse.value.joke
            console.log(joke);
            postjoketopage(joke)
         }
         const postjoketopage = (joke)=>{
            console.log(joke);
         }
        ////procedral "workflow" function

        const processJokeRequest = async()=>{
            const requestdata = getDataFromForm();
            const requesturl = buildRequesturl(requestdata);
            await requestJoke(requesturl);
            console.log("finished!")
        }

        processJokeRequest();