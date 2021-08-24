
const receta2 = new receta(Tea, Milk, Cinammon)
const receta3 = new receta(Tea, Tea, Milk)
const receta4 = new receta(Tea, Tea, Lemon)
const receta5 = new receta(Tea, Mint, Tea)
const receta6 = new receta(Tea, Tea, Mint)
const receta7 = new receta(Tea, Cinammon, Honey)
const receta8 = new receta(Milk, Cinammon, Cinammon)
const receta9 = new receta(Tea, Tea, Honey )
const receta10 = new receta(Tea, Ginger , Honey)
const receta11 = new receta(Tea, Cinammon, Milk)
const receta12 = new receta(Coffee,	Milk,	Ginger)
const receta13 = new receta(Tea,	Tea,	Tea)
const receta14 = new receta(Tea,	Honey,	Tea)
const r15 = new receta(Tea,	Cinammon,	Cinammon)
const r16 = new receta(Coffee,	Cinammon,	Honey)

//Ahora con Json
$.getJSON("https://github.com/MrPabloVS/CoffeeGuruJs/blob/master/Recetas/recetas.json",
    function (respuesta, estado, ) {
        if (estado === "success") {
            let recetasJson = respuesta;
            console.dir(recetasJson)
            //console.dir(recetasJson[0].Base) Tea
            
            for (const r of recetasJson) {
                rJson.push(new receta(r.Base, r.Primary, r.Secondary))
            }
        }
    }
);