// Variables para el cupon

const cuponesDescuentos = [
    "graciasPlatzi",
    "superOferta",
    "megaSuperOferta"
]


// Logica de calculo 

function ecuacionCalculo(precioOriginal,descuento){
    var resultado = document.querySelector('.resultado');

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;
    return resultado.innerHTML = 'Vas a pagar un total de $: ' + precioConDescuento;
}


function calcularPrecioConDescuento() {
    // Variables obtenidas del HTML
    var descuento = document.getElementById("PorcientoDeseado");
    var precioOriginal = document.getElementById("PrecioOriginal");
    
    descuento = descuento.valueAsNumber;
    precioOriginal = precioOriginal.valueAsNumber;
    
    return ecuacionCalculo(precioOriginal,descuento);
}

function calcularDescuentoCupon(){
    const cuponText = document.getElementById("cupon");
    var descuento = 0;
    var precioOriginal = document.getElementById("PrecioOriginal");
    
    precioOriginal = precioOriginal.valueAsNumber;

    if (!cuponesDescuentos.includes(cuponText.value)){
        alert("Este cupon es invalido!!!")
    }else if (cuponText.value === "graciasPlatzi"){
        descuento = 10;
    }else if (cuponText.value === "superOferta"){
        descuento = 15;
    }else if (cuponText.value === "megaSuperOferta"){
        descuento = 20;
    }

    return ecuacionCalculo(precioOriginal,descuento);

}