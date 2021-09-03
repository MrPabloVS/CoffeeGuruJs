

console.dir(rJson)
console.dir(cJson)

// const salidaHTML = document.getElementById("pSalida")

const formularioEntrada = document.getElementById("form-select");
formularioEntrada.onsubmit = function(e){
    e.preventDefault();
    let inputs = e.target.children;
    console.log(inputs[1].value)
    console.log(inputs[4].value)
    console.log(inputs[7].value)
    console.log(inputs[10].value)
    warmInput = inputs[1].value;
    coolInput = inputs[4].value;
    sweetInput = inputs[7].value;
    bitterInput = inputs[10].value;



    for (let i = 0; i < rJson.length; i++) {
        filtrosParciales(cJson[i], rJson[i])
        
    }

    for (let i = 0; i < rJson.length; i++) {
        filtroJson(cJson[i], rJson[i])
    
    }
}
