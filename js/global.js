//Arrays 
const warm = ["Not Warm", "Less Warm", "Warm", "Extra Warm"];
const cool = ["Not Cool", "Less Cool", "Cool", "Extra Cool"];
const sweet = ["Not Sweet", "Less Sweet", "Sweet", "Extra Sweet"]
const bitter = ["Not Bitter", "Less Bitter", "Bitter", "Extra Biter"]

//Ingredientes
const Coffee = "Coffee"
const GreenTea = "Green Tea"
const Tea = "Tea"
const Chocolate = "Chocolate"
const Milk = "Milk"
const Ginger = "Ginger"
const Mint = "Mint"
const Lemon = "Lemon"
const Honey = "Honey"
const Cinammon = "Cinammon"

//Constructor
class receta {
    constructor(base, primary, secondary) {
        this.base = base;
        this.primary = primary;
        this.secondary = secondary;
    }
}