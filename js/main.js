
//Declaracion de Variables
let warm = "";
let cool = "";
let sweet = "";
let bitter = "";

//Prompt Iniciales
warm = prompt("Warm:");
cool = prompt("Cool:");
sweet = prompt("Sweet:");
bitter = prompt("Bitter:");

if (warm == "" & cool == "" & sweet == "" & bitter == "") {
    alert("Vuelva a intentar");
    warm = prompt("Warm:");
    cool = prompt("Cool:");
    sweet = prompt("Sweet:");
    bitter = prompt("Bitter:")
}
else (warm == "Extra Warm" & cool == "Cool" & sweet == "Less Sweet" & bitter == "Less Bitter"); {
    alert("Tea Milk Cinammon")
}

