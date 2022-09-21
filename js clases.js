//js class

class Pizza{
    constructor(pizztype,pizzasize){
        this.size=pizzasize;
        this.crust = "original";
        this.type=pizztype;
    }
    get piccacrust(){
        return this.crust
    }
    set piccacrust(piccacrust){
        this.crust = piccacrust;
    }
    bake(){
        console.log(`baking a ${this.size} ${this.crust} ${this.type} crust pizza.`)

    }
}

const myPizza = new Pizza("chicken kari","10 meter width")
myPizza.type="supereme";///dont use this way
myPizza.piccacrust = "sausage"
myPizza.bake();
console.log(myPizza.piccacrust);