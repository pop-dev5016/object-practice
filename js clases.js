//js class

class Pizza{
    constructor(pizztype,pizzasize){
        this.size=pizzasize;
        this.crust = "original";
        this.type=pizztype;
    }

    bake(){
        console.log(`baking a ${this.size} ${this.crust} ${this.type} crust pizza.`)

    }
}

const myPizza = new Pizza("chicken kari","10 meter width")
myPizza.type="supereme";
myPizza.bake();

console.log(myPizza.type);