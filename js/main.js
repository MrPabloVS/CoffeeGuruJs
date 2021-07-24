
//Declaracion de Variables de entrada
let warmInput = "";
let coolInput = "";
let sweetInput = "";
let bitterInput = "";

//Arrays 
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
}


//Armar recetas
const receta3 = new receta("Tea", "Tea", "Milk")
const receta4 = new receta["Tea", "Tea", "Lemon"]
const receta5 = new receta["Tea", "Mint", "Tea"]
const receta6 = new receta["Tea", "Tea", "Mint"]
const receta7 = new receta["Tea", "Cinammon", "Honey"]
const receta8 = new receta["Milk", "Cinammon", "Cinammon"]

//Prompt Iniciales
warmInput = prompt("Ingrese valor: Warm");
coolInput = prompt("Ingrese valor: Cool");
sweetInput = prompt("Ingrese valor: Sweet");
bitterInput = prompt("Ingrese valor: Bitter");

if (warmInput == "" & coolInput == "" & sweetInput == "" & bitterInput == "") {
    alert("Ingrese un Valor");
    warmInput = prompt("Ingrese valor: Warm");
    coolInput = prompt("Ingrese valor: Cool");
    sweetInput = prompt("Ingrese valor: Sweet");
    bitterInput = prompt("Ingrese valor: Bitter");
}

else if(warmInput == "Extra Warm" & coolInput == "Cool" & sweetInput == "Less Sweet" & bitterInput == "Less Bitter") {
    alert("Tea Milk Cinammon");

}
else if (warmInput == "Extra Warm" & coolInput == "Cool" & sweetInput == "Not Sweet" & bitterInput == "Bitter"){
    alert(receta3.base + receta3.primary + receta3.secondary);
}

else if(warmInput == "Extra Warm" & coolInput == "Cool" & sweetInput == "Not Sweet" & bitterInput == "Extra Bitter"){
    alert(receta4[0]+receta4[1]+receta4[2]);
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
    alert("Vuelva a intentar");
    warmInput = prompt("Ingrese valor: Warm");
    coolInput = prompt("Ingrese valor: Cool");
    sweetInput = prompt("Ingrese valor: Sweet");
    bitterInput = prompt("Ingrese valor: Bitter");
}

