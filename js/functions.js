
//Cambiar Salida
function cambiarTxt(receta) {
    //Salida de Texto
    salidaHTML.innerHTML = `${receta.base} ${receta.primary} ${receta.secondary}`

    //Cambiar Cards
        //Base Card
    if(receta.base == Coffee){
        cardBase.innerHTML = `<img src="img/ingredientes/base/cofeeImg.png" class="card-img-top" alt="...">`
        cardBaseTxt.innerHTML = `<h5 class="card-title">Coffee</h5>`
    }
    else if(receta.base == GreenTea){
        cardBase.innerHTML = `<img src="img/ingredientes/base/greenTeaImg.png" class="card-img-top" alt="...">`
        cardBaseTxt.innerHTML = `<h5 class="card-title">Green Tea</h5>`
    }

    else if (receta.base == Tea) {
        cardBase.innerHTML = `<img src="img/ingredientes/base/teaImg.png" class="card-img-top" alt="...">`
        cardBaseTxt.innerHTML = `<h5 class="card-title">Tea</h5>`
    }

    else if (receta.base == Chocolate) {
        cardBase.innerHTML = `<img src="img/ingredientes/base/chocolateImg.png" class="card-img-top" alt="...">`
        cardBaseTxt.innerHTML = `<h5 class="card-title">Chocolate</h5>`
    }

    else if (receta.base == Milk) {
        cardBase.innerHTML = `<img src="img/ingredientes/base/milkImg.png" class="card-img-top" alt="...">`
        cardBaseTxt.innerHTML = `<h5 class="card-title">Milk</h5>`
    }

    
        //Primary Card
    if(receta.primary == Coffee){
        cardPrimary.innerHTML = `<img src="img/ingredientes/base/cofeeImg.png" class="card-img-top" alt="...">`
        cardPrimaryTxt.innerHTML = `<h5 class="card-title">Coffee</h5>`
    }
    else if(receta.primary == GreenTea){
        cardPrimary.innerHTML = `<img src="img/ingredientes/base/greenTeaImg.png" class="card-img-top" alt="...">`
        cardPrimaryTxt.innerHTML = `<h5 class="card-title">Green Tea</h5>`
    }

    else if (receta.primary == Tea) {
        cardPrimary.innerHTML = `<img src="img/ingredientes/base/teaImg.png" class="card-img-top" alt="...">`
        cardPrimaryTxt.innerHTML = `<h5 class="card-title">Tea</h5>`
    }

    else if (receta.primary == Chocolate) {
        cardPrimary.innerHTML = `<img src="img/ingredientes/base/chocolateImg.png" class="card-img-top" alt="...">`
        cardPrimaryTxt.innerHTML = `<h5 class="card-title">Chocolate</h5>`
    }

    else if (receta.primary == Milk) {
        cardPrimary.innerHTML = `<img src="img/ingredientes/base/milkImg.png" class="card-img-top" alt="...">`
        cardPrimaryTxt.innerHTML = `<h5 class="card-title">Milk</h5>`
    }

    else if (receta.primary == Ginger) {
        cardPrimary.innerHTML = `<img src="img/ingredientes/all/gingerImg.png" class="card-img-top" alt="...">`
        cardPrimaryTxt.innerHTML = `<h5 class="card-title">Ginger</h5>`
    }

    else if (receta.primary == Mint) {
        cardPrimary.innerHTML = `<img src="img/ingredientes/all/mintImg.png" class="card-img-top" alt="...">`
        cardPrimaryTxt.innerHTML = `<h5 class="card-title">Mint</h5>`
    }

    else if (receta.primary == Lemon) {
        cardPrimary.innerHTML = `<img src="img/ingredientes/all/lemonImg.png" class="card-img-top" alt="...">`
        cardPrimaryTxt.innerHTML = `<h5 class="card-title">Lemon</h5>`
    }

    else if (receta.primary == Honey) {
        cardPrimary.innerHTML = `<img src="img/ingredientes/all/honeyImg.png" class="card-img-top" alt="...">`
        cardPrimaryTxt.innerHTML = `<h5 class="card-title">Honey</h5>`
    }

    else if (receta.primary == Cinammon) {
        cardPrimary.innerHTML = `<img src="img/ingredientes/all/cinammonImg.png" class="card-img-top" alt="...">`
        cardPrimaryTxt.innerHTML = `<h5 class="card-title">Cinammon</h5>`
    }


    //Secondary Card
    if(receta.secondary == Coffee){
        cardSecondary.innerHTML = `<img src="img/ingredientes/base/cofeeImg.png" class="card-img-top" alt="...">`
        cardSecondaryTxt.innerHTML = `<h5 class="card-title">Coffee</h5>`
    }
    else if(receta.secondary == GreenTea){
        cardSecondary.innerHTML = `<img src="img/ingredientes/base/greenTeaImg.png" class="card-img-top" alt="...">`
        cardSecondaryTxt.innerHTML = `<h5 class="card-title">Green Tea</h5>`
    }

    else if (receta.secondary == Tea) {
        cardSecondary.innerHTML = `<img src="img/ingredientes/base/teaImg.png" class="card-img-top" alt="...">`
        cardSecondaryTxt.innerHTML = `<h5 class="card-title">Tea</h5>`
    }

    else if (receta.secondary == Chocolate) {
        cardSecondary.innerHTML = `<img src="img/ingredientes/base/chocolateImg.png" class="card-img-top" alt="...">`
        cardSecondaryTxt.innerHTML = `<h5 class="card-title">Chocolate</h5>`
    }

    else if (receta.secondary == Milk) {
        cardSecondary.innerHTML = `<img src="img/ingredientes/base/milkImg.png" class="card-img-top" alt="...">`
        cardSecondaryTxt.innerHTML = `<h5 class="card-title">Milk</h5>`
    }

    else if (receta.secondary == Ginger) {
        cardSecondary.innerHTML = `<img src="img/ingredientes/all/gingerImg.png" class="card-img-top" alt="...">`
        cardSecondaryTxt.innerHTML = `<h5 class="card-title">Ginger</h5>`
    }

    else if (receta.secondary == Mint) {
        cardSecondary.innerHTML = `<img src="img/ingredientes/all/mintImg.png" class="card-img-top" alt="...">`
        cardSecondaryTxt.innerHTML = `<h5 class="card-title">Mint</h5>`
    }

    else if (receta.secondary == Lemon) {
        cardSecondary.innerHTML = `<img src="img/ingredientes/all/lemonImg.png" class="card-img-top" alt="...">`
        cardSecondaryTxt.innerHTML = `<h5 class="card-title">Lemon</h5>`
    }

    else if (receta.secondary == Honey) {
        cardSecondary.innerHTML = `<img src="img/ingredientes/all/honeyImg.png" class="card-img-top" alt="...">`
        cardSecondaryTxt.innerHTML = `<h5 class="card-title">Honey</h5>`
    }

    else if (receta.secondary == Cinammon) {
        cardSecondary.innerHTML = `<img src="img/ingredientes/all/cinammonImg.png" class="card-img-top" alt="...">`
        cardSecondaryTxt.innerHTML = `<h5 class="card-title">Cinammon</h5>`
    }
}

//<img src="img/neilImg.jpg" class="card-img-top" alt="...">
//`<img src="img/ingredientes/base/cofeeImg.png" class="card-img-top" alt="...">`
//<h5 class="card-title">Base to be</h5>
//`<h5 class="card-title">Coffee</h5>`


//Filtro
function filtro(warm, cool, sweet, bitter, receta) {
    if(warmInput == warm & coolInput == cool & sweetInput == sweet & bitterInput == bitter) {
        cambiarTxt(receta)

    }
}