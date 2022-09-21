import {posts} from "./higher order function.mjs";

 posts.forEach((post)=>{
     console.log(post);
 })


const filteredpost = posts.filter((post)=>{
    return post.userId === 1;
})

console.log(filteredpost)


const mapedpostpost = filteredpost.map((post)=>{
    return post.id *1;
})

console.log(mapedpostpost);

const reducedpost = mapedpostpost.reduce((sum ,post)=>{
    return sum + post;
});
console.log(reducedpost);