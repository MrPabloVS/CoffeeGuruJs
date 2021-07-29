
//Declaracion de Variables de entrada
/* let warmInput = "";
let coolInput = "";
let sweetInput = "";
let bitterInput = ""; */

/* //Arrays 
const warm = ["Not Warm", "Less Warm", "Warm", "Extra Warm"];
const cool = ["Not Cool", "Less Cool", "Cool", "Extra Cool"];
const sweet = ["Not Sweet", "Less Sweet", "Sweet", "Extra Sweet"]
const bitter = ["Not Bitter", "Less Bitter", "Bitter", "Extra Biter"]

//Constructor
class receta {
    constructor(base, primary, secondary) {
        this.base = base;
        this.primary = primary;
        this.secondary = secondary;
    }
} */


//Armar recetas
/* const receta2 = new receta("Tea", "Milk", "Cinammon")
const receta3 = new receta("Tea", "Tea", "Milk")
const receta4 = new receta("Tea", "Tea", "Lemon")
const receta5 = new receta("Tea", "Mint", "Tea")
const receta6 = new receta("Tea", "Tea", "Mint")
const receta7 = new receta("Tea", "Cinammon", "Honey")
const receta8 = new receta("Milk", "Cinammon", "Cinammon") */



const salidaHTML = document.getElementById("pSalida")

const formularioEntrada = document.getElementById("form-select");
formularioEntrada.onsubmit = function(e){
    e.preventDefault();
    let inputs = e.target.children;
    console.log(inputs[1].value)
    console.log(inputs[3].value)
    console.log(inputs[5].value)
    console.log(inputs[7].value)
    let warmInput = inputs[1].value;
    let coolInput = inputs[3].value;
    let sweetInput = inputs[5].value;
    let bitterInput = inputs[7].value;



    if (warmInput == "" & coolInput == "" & sweetInput == "" & bitterInput == "") {
        salidaHTML.innerHTML = "Select Values"

    }

    else if(warmInput == 3 & coolInput == 2 & sweetInput == 1 & bitterInput == 1) {
        salidaHTML.innerHTML = `${receta2.base} ${receta2.primary} ${receta2.secondary}`

    }
    else if (warmInput == 3 & coolInput == 2 & sweetInput == 0 & bitterInput == 2){
        salidaHTML.innerHTML = `${receta3.base} ${receta3.primary} ${receta3.secondary}`
    }

    else if(warmInput == 3 & coolInput == 2 & sweetInput == 0 & bitterInput == 3){
        salidaHTML.innerHTML = `${receta4.base} ${receta4.primary} ${receta4.secondary}`
    }

    else if(warmInput == warm[3] & coolInput == cool[3] & sweetInput == sweet[1] & bitterInput == bitter[3]){
        alert(receta5[0]+receta5[1]+receta5[2]);
    }

    else if(warmInput == warm[3] & coolInput == cool[3] & sweetInput == sweet[0] & bitterInput == bitter[2]){
        alert(receta6[0]+receta6[1]+receta6[2]);
    }

    else if(warmInput == warm[3] & coolInput == cool[1] & sweetInput == sweet[3] & bitterInput == bitter[1]){
        alert(receta7[0]+receta7[1]+receta7[2]);
    }

    else if(warmInput == warm[3] & coolInput == cool[1] & sweetInput == sweet[3] & bitterInput == bitter[0]){
        alert(receta8[0]+receta8[1]+receta8[2]);
    }



    else{
        salidaHTML.innerHTML = "Conbination not valid"
    }

}
