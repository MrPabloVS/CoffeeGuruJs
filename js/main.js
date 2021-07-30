

const salidaHTML = document.getElementById("pSalida")

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
        salidaHTML.innerHTML = `${receta2.base} ${receta2.primary} ${receta2.secondary}`

    }
    else if (warmInput == 3 & coolInput == 2 & sweetInput == 0 & bitterInput == 2){
        salidaHTML.innerHTML = `${receta3.base} ${receta3.primary} ${receta3.secondary}`
    }

    else if(warmInput == 3 & coolInput == 2 & sweetInput == 0 & bitterInput == 3){
        salidaHTML.innerHTML = `${receta4.base} ${receta4.primary} ${receta4.secondary}`
    }

    else if(warmInput == 3 & coolInput == 3 & sweetInput == 1 & bitterInput == 3){
        salidaHTML.innerHTML = `${receta5.base} ${receta5.primary} ${receta5.secondary}`
    }

    else if(warmInput == 3 & coolInput == 3 & sweetInput == 0 & bitterInput == 2){
        salidaHTML.innerHTML = `${receta6.base} ${receta6.primary} ${receta6.secondary}`
    }

    else if(warmInput == 3 & coolInput == 1 & sweetInput == 3 & bitterInput == 1){
        salidaHTML.innerHTML = `${receta7.base} ${receta7.primary} ${receta7.secondary}`
    }

    else if(warmInput == 3 & coolInput == 1 & sweetInput == 3 & bitterInput == 0){
        salidaHTML.innerHTML = `${receta8.base} ${receta8.primary} ${receta8.secondary}`
    }

    else if(warmInput == 3 & coolInput == 1 & sweetInput == 1 & bitterInput == 2){
        salidaHTML.innerHTML = `${receta9.base} ${receta9.primary} ${receta9.secondary}`
    }

    else if(warmInput == 3 & coolInput == 1 & sweetInput == 1 & bitterInput == 3){
        salidaHTML.innerHTML = `${receta10.base} ${receta10.primary} ${receta10.secondary}`
    }

    else if(warmInput == 3 & coolInput == 1 & sweetInput == 1 & bitterInput == 1){
        salidaHTML.innerHTML = `${receta11.base} ${receta11.primary} ${receta11.secondary}`
    }

    else if(warmInput == 3 & coolInput == 1 & sweetInput == 0 & bitterInput == 2){
        salidaHTML.innerHTML = `${receta12.base} ${receta12.primary} ${receta12.secondary}`
    }

    else if(warmInput == 3 & coolInput == 1 & sweetInput == 0 & bitterInput == 3){
        salidaHTML.innerHTML = `${receta13.base} ${receta13.primary} ${receta13.secondary}`
    }

    else if(warmInput == 3 & coolInput == 1 & sweetInput == 2 & bitterInput == 2){
        salidaHTML.innerHTML = `${receta14.base} ${receta14.primary} ${receta14.secondary}`
    }



    /* else{
        salidaHTML.innerHTML = "Conbination not valid"
    } */

}
