let nums = [1,2,3,4,5,6,7]


// nums.forEach(function(mul){
//     console.log(mul *2); 
// });


// console.log(nums.filter((even)=>even%2==0));


// nums.filter((even)=>even%2 === 0)
//     .forEach(function(even){
//     console.log(even)
//    })


// nums.filter((even)=>even%2 === 0)
// even.forEach(function(sunny){   /////wrong
//     console.log(sunny)
//    })


// nums.filter((even)=>even%2 === 0)
//     .map((even)=>even-1)
//     .forEach(function(even){
//     console.log(even)
//    })

let resuce = nums.filter((even)=>even%2 === 0)
    .map((even)=>even*2)
    .reduce((a,b)=>a+b);

    console.log(resuce);
