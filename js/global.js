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

class cualidades {
    constructor(warm, cool, sweet, bitter){
        this.warm = warm
        this.cool = cool
        this.sweet = sweet
        this.bitter = bitter
    }
}

class nRecipe {
    constructor(name, img, base, primary, secondary, txt){
    this.name = name
    this.img = img
    this.base = base
    this.primary = primary
    this. secondary = secondary
    this.txt = txt

    }
}


//Lectores
const salidaHTML = document.getElementById("pSalida")
const cardBase = document.getElementById("cardBase")
const cardPrimary = document.getElementById("cardPrimary")
const cardSecondary = document.getElementById("cardSecondary")
const cardBaseTxt = document.getElementById("cardBaseTxt")
const cardPrimaryTxt = document.getElementById("cardPrimaryTxt")
const cardSecondaryTxt = document.getElementById("cardSecondaryTxt")
const cardsContainer = document.getElementById("nameR")


//Inputs
let warmInput = ""
let coolInput = ""
let sweetInput = ""
let bitterInput = ""


// Get Json
let rJson = []
let cJson = []

// Named Recipes
let brewPad = []

