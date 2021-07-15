
//Declaracion de Variables
let warm = "";
let cool = "";
let sweet = "";
let bitter = "";

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

//Prompt Iniciales
warm = prompt("Warm:");
cool = prompt("Cool:");
sweet = prompt("Sweet:");
bitter = prompt("Bitter:");

if (warm == "" & cool == "" & sweet == "" & bitter == "") {
    alert("Ingrese un Valor");
    warm = prompt("Warm:");
    cool = prompt("Cool:");
    sweet = prompt("Sweet:");
    bitter = prompt("Bitter:")
}
 else if(warm == "Extra Warm" & cool == "Cool" & sweet == "Less Sweet" & bitter == "Less Bitter") {
    alert("Tea Milk Cinammon");

}
else if (warm == "Extra Warm" & cool == "Cool" & sweet == "Not Sweet" & bitter == "Bitter"){
    alert(receta3.base + receta3.primary + receta3.secondary);

}
else{
    alert("Vuelva a intentar");
    warm = prompt("Warm:");
    cool = prompt("Cool:");
    sweet = prompt("Sweet:");
    bitter = prompt("Bitter:")
}

