
// Logica de calculo 

function calcularPrecioConDescuento() {
    // Variables obtenidas del HTML
    var descuento = document.getElementById("PorcientoDeseado");
    var precioOriginal = document.getElementById("PrecioOriginal");
    var resultado = document.querySelector('.resultado');

    descuento = descuento.valueAsNumber;
    precioOriginal = precioOriginal.valueAsNumber;
    
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;
    return resultado.innerHTML = 'Vas a pagar un total de: ' + precioConDescuento;
  
}