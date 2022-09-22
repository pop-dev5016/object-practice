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

        crust = "original";//public
        #sause = "traditiona "///work only above the constructor
        #size
        constructor(pizzasize){
            this.#size=pizzasize;
            
        }
        getcrust(){
            return this.crust
        }
        setcrust(piccacrust){
            this.crust = piccacrust;
        }
        pop(){
            console.log(`here is your ${this.crust} ${this.#sause} sause ${this.#size} pizza`);
        }
    }

    let vii = new Pizza("large")
    //vii.pop()
   console.log(vii.crust); //public
   console.log(vii.getcrust()); ///public
   console.log(vii.sauce);