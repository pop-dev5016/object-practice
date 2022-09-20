let map = new Map();
map.set("name","pavithran")
map.set("cgpa",9.9)
map.set("dep",'instrumentation')
map.set("paced",'zoho')
map.set("cgpa",6.9)
map.set("place",'los angle')
// console.log(map.keys())
// console.log(map.has("pavithran"))
// console.log(map.get("cgpa"))
// console.log(map.has("name"))
//  for(let[key,value] of map ){
//     console.log(key,":",value)
//  }

 map.forEach(function(value,key){
    console.log(key," : ",value)
 })