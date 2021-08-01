

// const salidaHTML = document.getElementById("pSalida")

const formularioEntrada = document.getElementById("form-select");
formularioEntrada.onsubmit = function(e){
    e.preventDefault();
    let inputs = e.target.children;
    console.log(inputs[1].value)
    console.log(inputs[4].value)
    console.log(inputs[7].value)
    console.log(inputs[10].value)
    let warmInput = inputs[1].value;
    let coolInput = inputs[4].value;
    let sweetInput = inputs[7].value;
    let bitterInput = inputs[10].value;



    if (warmInput == "" & coolInput == "" & sweetInput == "" & bitterInput == "") {
        salidaHTML.innerHTML = "Select Values"

    }

    else if(warmInput == 3 & coolInput == 2 & sweetInput == 1 & bitterInput == 1) {
        cambiarTxt(receta2)

    }
    else if (warmInput == 3 & coolInput == 2 & sweetInput == 0 & bitterInput == 2){
        cambiarTxt(receta3)
    }

    else if(warmInput == 3 & coolInput == 2 & sweetInput == 0 & bitterInput == 3){
        cambiarTxt(receta4)
    }

    else if(warmInput == 3 & coolInput == 3 & sweetInput == 1 & bitterInput == 3){
        cambiarTxt(receta5)
    }

    else if(warmInput == 3 & coolInput == 3 & sweetInput == 0 & bitterInput == 2){
        cambiarTxt(receta6)
    }

    else if(warmInput == 3 & coolInput == 1 & sweetInput == 3 & bitterInput == 1){
        cambiarTxt(receta7)
    }

    else if(warmInput == 3 & coolInput == 1 & sweetInput == 3 & bitterInput == 0){
        cambiarTxt(receta8)
    }

    else if(warmInput == 3 & coolInput == 1 & sweetInput == 1 & bitterInput == 2){
        cambiarTxt(receta9)
    }

    else if(warmInput == 3 & coolInput == 1 & sweetInput == 1 & bitterInput == 3){
         //salidaHTML.innerHTML = `${receta10.base} ${receta10.primary} ${receta10.secondary}`
        cambiarTxt(receta10)
    }

    else if(warmInput == 3 & coolInput == 1 & sweetInput == 1 & bitterInput == 1){
        cambiarTxt(receta11)
    }

    else if(warmInput == 3 & coolInput == 1 & sweetInput == 0 & bitterInput == 2){
        cambiarTxt(receta12)
    }

    else if(warmInput == 3 & coolInput == 1 & sweetInput == 0 & bitterInput == 3){
        cambiarTxt(receta13)
    }

    else if(warmInput == 3 & coolInput == 1 & sweetInput == 2 & bitterInput == 2){
        cambiarTxt(receta14)
    }



    /* else{
        salidaHTML.innerHTML = "Conbination not valid"
    } */

}
