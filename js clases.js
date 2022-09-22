// //js class

// class Pizza{////////////parent classs
//     constructor(pizzasize){
//         this.size=pizzasize;
//         this.crust = "original";
//     }
//     getcrust(){
//         return this.crust
//     }
//     setcrust(piccacrust){
//         this.crust = piccacrust;
//     }
// }

// class sauce extends Pizza{///////chuld
//     constructor(pizzasie){
//         super(pizzasie);
//         this.type = "the work";

//     }
//     slice(){
//         console.log(`our  ${this.type} ${this.size} pizza has 12 slices`);
//     }
// }

// const mytea = new sauce("medium")
// mytea.slice()


////////////////////////////factory function

// function pizzafactory(pizzasize){
//     const crust = "original";
//     const size = pizzasize
//     return {             ////return vachi use pannala this word illama
//         bake:()=>{
//             console.log(`baking a ${size} ${crust} crust pizza`)
//         }
//     }

// }

// const mypizza = pizzafactory("small")
// mypizza.bake();


/////////////////////////public and private property

class Pizza{
        constructor(pizzasize){
            this.size=pizzasize;
            this.crust = "original";
        }
        getcrust(){
            return this.crust
        }
        setcrust(piccacrust){
            this.crust = piccacrust;
        }
    }