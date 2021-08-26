

//Ahora con Json -------------- ../Recetas/recetas.json --- https://github.com/MrPabloVS/CoffeeGuruJs/blob/master/Recetas/recetas.json
$.getJSON("https://github.com/MrPabloVS/CoffeeGuruJs/blob/master/Recetas/recetas.json",
    function (respuesta, estado, ) {
        if (estado === "success") {
            let recetasJson = respuesta;
            console.dir(recetasJson)
            
            
            for (const r of recetasJson) {
                rJson.push(new receta(r.Base, r.Primary, r.Secondary))
            }
        }
    }
);

// Juntar Cualidades Json
$.getJSON("https://github.com/MrPabloVS/CoffeeGuruJs/blob/master/Recetas/recetas.json",
    function (respuesta, estado, ) {
        if (estado === "success") {
            let recetasJson = respuesta;
            
            
            for (const r of recetasJson) {
                cJson.push(new cualidades(r.Warm, r.Cool, r.Sweet, r.Bitter))
            }
        }
    }
);