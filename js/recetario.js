



//Ahora con Json -------------- ../Recetas/recetas.json --- https://github.com/MrPabloVS/CoffeeGuruJs/blob/master/Recetas/recetas.json
$.getJSON("../Recetas/recetas.json",
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
$.getJSON("../Recetas/recetas.json",
    function (respuesta, estado, ) {
        if (estado === "success") {
            let recetasJson = respuesta;
            
            
            for (const r of recetasJson) {
                cJson.push(new cualidades(r.Warm, r.Cool, r.Sweet, r.Bitter))
            }
        }
    }
);

//Named Recipes

brewPad.push(new nRecipe("Bedchamber","../img/namedRecipes/bedChamber.png", Milk, Cinammon, Honey,"A cup for those longing for a deep slumber."))
brewPad.push(new nRecipe("Bitter Heart","../img/namedRecipes/bitterHeart.png", Chocolate, Ginger, Cinammon,"Shadows that will help you try to hide."))
brewPad.push(new nRecipe("Black Lemon","../img/namedRecipes/blackLemon.png", Coffee, Coffee, Lemon,"A perfect - If unlikely - combination of sour and bitter."))
brewPad.push(new nRecipe("Black Magic","../img/namedRecipes/blackMagic.png", Coffee, Mint, Honey,"Sweet, cool and magically wakes you up."))
brewPad.push(new nRecipe("Caffé Latte","../img/namedRecipes/caffeLatte.png", Milk, Cinammon, Honey,"A caffeine boost dominated by milk."))
brewPad.push(new nRecipe("Cappuccino","../img/namedRecipes/cappuccino.png", Coffee, Coffee, Milk,"Italian Delight."))
brewPad.push(new nRecipe("Chocobee Miruku","../img/namedRecipes/chocobeeMiruku.png", Chocolate, Honey, Milk,"Sweet, Nourishing, Healthy, Chocolate."))
brewPad.push(new nRecipe("Cough Syrup","../img/namedRecipes/coughSyrup.png", GreenTea, Lemon, Honey,"A cure fo a sore throat."))
brewPad.push(new nRecipe("Dark Chocolate","../img/namedRecipes/darkChocolate.png", Chocolate, Chocolate, Chocolate,"A warm and calming darkness."))
brewPad.push(new nRecipe("Espresso","../img/namedRecipes/espresso.png", Coffee, Coffee, Coffee,"Blacker than moonless night, hotter and more bitter than hell itself."))
brewPad.push(new nRecipe("Gala Had","../img/namedRecipes/galaHad.png", Tea, Milk, Ginger,"Ginger chai latte,good to calm yet warm your nerve."))
brewPad.push(new nRecipe("Gingerbread Coffee","../img/namedRecipes/gingerbreadCoffee.png", Coffee, Ginger, Cinammon,"Sweetened with brown sugar to satisfy the cookie monster."))
brewPad.push(new nRecipe("Ginger Latte","../img/namedRecipes/gingerLatte.png", Coffee, Ginger, Milk,"Warm energy boost, perfect for a cold evening."))
brewPad.push(new nRecipe("Green Tea Latte","../img/namedRecipes/greenTeaLatte.png", GreenTea, Milk, Milk,"Both Sweet and Savory, with a hint of bitterness for the heart."))
brewPad.push(new nRecipe("Jahe Tubruk","../img/namedRecipes/jaheTubruk.png", Coffee, Coffee, Ginger,"Ginger presides over the ground coffee at the bottom of the cup, originally from Indonesia."))
brewPad.push(new nRecipe("Le Menthol","../img/namedRecipes/leMenthol.png", Milk, Mint, Lemon,"Sour and cool whith a hint of home."))
brewPad.push(new nRecipe("Lemony Snippet","../img/namedRecipes/lemonySnippet.png", Milk, Honey, Lemon,"A fortunate tale in a cup."))
brewPad.push(new nRecipe("Marrakech","../img/namedRecipes/Marrakech.png", GreenTea, Mint, Mint,"Fresh and healthy drink from Morocco."))
brewPad.push(new nRecipe("Masala Chai","../img/namedRecipes/MasalaChai.png", Tea, Ginger, Cinammon,"Spiced tea from southern Asia."))
brewPad.push(new nRecipe("Midsummers Night's Dream","../img/namedRecipes/midsummerNightsDream.png", Tea, Lemon, Honey,"Sweet and memorable, like summer time blues."))
brewPad.push(new nRecipe("Milky Way","../img/namedRecipes/milkyWay.png", Milk, Honey, Mint,"Sweet and cool, like outer space."))
brewPad.push(new nRecipe("Russian Tea","../img/namedRecipes/russianTea.png", Tea, Lemon, Cinammon,"Despite the name, It's a totally american drink."))
brewPad.push(new nRecipe("Shai Adeni","../img/namedRecipes/shaiAdeni.png", Tea, Milk, Cinammon,"Sweet spicy chai latte from the town od Aden, Yemen."))
brewPad.push(new nRecipe("Shin Genmaicha","../img/namedRecipes/shinGenmaicha.png", GreenTea, GreenTea, Cinammon,"A variation of the Japanese brew, mixing the brown rice whith ginger."))
brewPad.push(new nRecipe("Spanish Sahara","../img/namedRecipes/spanishSahara.png", Chocolate, Milk, Ginger,"Warm and cozy, just like a day in Barcelona."))
brewPad.push(new nRecipe("Spiced Lady","../img/namedRecipes/spicedLady.png", Chocolate, Milk, Cinammon,"A British chocolate drink, extremely popular on the '90s."))
brewPad.push(new nRecipe("STMJ","../img/namedRecipes/STMJ.png", Milk, Ginger, Honey,"Warm booster made of susu(milk), telur(egg), madu(honey), and jahe(ginger); from indonesia."))
brewPad.push(new nRecipe("Sugar and Spice","../img/namedRecipes/sugarAndSpice.png", Coffee, Honey, Cinammon,"Spicy, Sweet, and natul bliss in a cup."))
brewPad.push(new nRecipe("Teh Tarik","../img/namedRecipes/tehTarik.png", Tea, Tea, Milk,"Tea with milk, mixed by pouring the two repeatedly between cups; Originally from Malaysia."))
brewPad.push(new nRecipe("The Grinch","../img/namedRecipes/theGrinch.png", GreenTea, Ginger, Cinammon,"Green, spicy, and not everyone's cup of tea."))
