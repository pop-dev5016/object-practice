//js class

class Pizza{
    constructor(){
        this.size="medium";
        this.crust = "original";
    }

    bake(){
        console.log(`baking a ${this.size} ${this.crust} crust pizza.`)

    }
}

const myPizza = new Pizza
myPizza.bake();