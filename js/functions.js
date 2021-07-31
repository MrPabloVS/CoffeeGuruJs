function cambiarTxt(receta) {
    //Salida de Texto
    salidaHTML.innerHTML = `${receta.base} ${receta.primary} ${receta.secondary}`

    //Cambiar Cards
    if(receta.base == Coffee){
        cardBase.innerHTML = `<img src="img/ingredientes/base/cofeeImg.png" class="card-img-top" alt="...">`

    }
    else if(receta.base == GreenTea){
        cardBase.innerHTML = `<img src="img/ingredientes/base/greenTeaImg.png" class="card-img-top" alt="...">`

    }

    else if (receta.base == Tea) {
        cardBase.innerHTML = `<img src="img/ingredientes/base/teaImg.png" class="card-img-top" alt="...">`
    }

    else if (receta.base == Chocolate) {
        cardBase.innerHTML = `<img src="img/ingredientes/base/chocolateImg.png" class="card-img-top" alt="...">`
    }

    else if (receta.base == Milk) {
        cardBase.innerHTML = `<img src="img/ingredientes/base/milkImg.png" class="card-img-top" alt="...">`
    }

}

//<img src="img/neilImg.jpg" class="card-img-top" alt="...">
//`<img src="img/ingredientes/base/cofeeImg.png" class="card-img-top" alt="...">`