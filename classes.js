class Pizza {
    constructor(pizzaSize) {
        this._size = pizzaSize;
        this._crust = "original"
        this.toppings = [];
    }

    getCrust(){
        return this._crust;
    }

    setCrust(pizzaCrust){
        this._crust = pizzaCrust
    }

    getToppings(){
        return this.toppings;
    }

    setToppings(toppings){
        this.toppings.push(toppings)
    }

    bake(){
        console.log(`Baking a ${this.size} $} ${this.crust} crust pizza`)
    }
}

class SpecialtyPizza extends Pizza{
    constructor(pizzaSize){
        super(pizzaSize)
        this.type = "This Works";
    }

    slice(){
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices`)
    }
}

// Factory Function -- The Other Way
function pizzaFactory(pizzaSize){
    const crust = "original";
    const size = pizzaSize;
    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza`)
    }
}

// The new way
class CrazyPizza {
    crust = "original";
    #sauce = "traditional";
    #size;

    constructor(pizzaSize){
        this.#size = pizzaSize;
    }

    hereYouGo() {
        console.log(`Here's your ${crust} ${this.#sauce} 
        sauce ${this.#size} pizza`)
    }
}

const myPizza = pizzaFactory("small");
myPizza.bake();

/* const myPizza = new Pizza("pepperoni");
myPizza.setCrust("thin");
myPizza.bake();
myPizza.setToppings("sausage");
myPizza.setToppings("olives")
console.log(myPizza.getToppings()) */

const mySpecialty = new SpecialtyPizza("medium");
mySpecialty.slice();