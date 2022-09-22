//js class

class Pizza{
    constructor(pizztype,pizzasize){
        this.size=pizzasize;
        this.crust = "original";
        this.type=pizztype;
        this.topping=[]
    }
    getcrust(){
        return this.crust
    }
    setcrust(piccacrust){
        this.crust = piccacrust;
    }
    getTopping(){
        return this.topping
    }
    settopping(top){
        this.topping.push(top)
    }




    bake(){
        console.log(`baking a ${this.size} ${this.crust} ${this.type} crust pizza.`)

    }
}

const myPizza = new Pizza("chicken kari","10 meter width")
myPizza.type="supereme";///dont use this way
myPizza.setcrust("thin")
myPizza.bake();
console.log(myPizza.getcrust());
myPizza.settopping("sausagae")
myPizza.settopping("thin") 
myPizza.settopping("thick")
console.log(myPizza.getTopping());