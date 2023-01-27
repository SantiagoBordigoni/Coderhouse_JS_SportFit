// SELECCIONADOR DE PLANES DE GIMNASIO
let informacion = parseInt(prompt("Seleccione del 1 al 3 para obtener informacion acerca de cada plan. Escriba 0 para salir"))
while (informacion != 0){
    if (informacion==1){
        console.log("Plan Mensual: cuenta con beneficios como las actividades Indoor/Outdoor, clases online y acceso a pileta.")
        informacion = parseInt(prompt("Seleccione del 1 al 3 para obtener informacion acerca de cada plan. Escriba 0 para salir"))
    }else if (informacion===2){
        console.log("Plan Anual: cuenta con beneficios como las actividades Indoor/Outdoor, clases online y acceso a pileta. Acceda por un precio mensual menor al primer plan.")
        informacion = parseInt(prompt("Seleccione del 1 al 3 para obtener informacion acerca de cada plan. Escriba 0 para salir"))
    }
    else if (informacion===3){
        console.log("Plan Anual Plus: cuenta con beneficios como las actividades Indoor/Outdoor, clases online, acceso a pileta y beneficios exclusivos con la tarjeta SportFit.")
        informacion = parseInt(prompt("Seleccione del 1 al 3 para obtener informacion acerca de cada plan. Escriba 0 para salir"))
    }
    else{
        informacion = parseInt(prompt("ERROR. Opcion invalida. Seleccione del 1 al 3 para obtener informacion acerca de cada plan. Escriba 0 para salir"))
    }

}

let cantidad = parseInt(prompt("Ingrese la cantidad de personas que desea asociar"))
let precioTotal = 0
for (let i=1; i<= cantidad; i++){
    let planSeleccionado = parseInt(prompt( i + ". Ingrese el plan al que desea asociarse (1, 2 o 3):"));
    while (planSeleccionado != 1 && planSeleccionado != 2 && planSeleccionado != 3){
        planSeleccionado= prompt("Plan no valido. Por favor ingrese nuevamente el plan al que desea asociarse:");
    } 
    let precioPlanMes;
    if (planSeleccionado == 1){
        precioPlanMes = 10000;
        console.log("Accediste al plan mensual")
    }
    else if (planSeleccionado == 2){
        precioPlanMes = 7500;
        console.log("Accediste al plan anual")
    }
    else if (planSeleccionado == 3){
        precioPlanMes = 9000;
        console.log("Accediste al plan anual plus")
    }

    precioTotal += precioPlanMes
}
if (cantidad>=3){
    alert("Gracias! Por la compra de 3 o más planes se te otorgó un descuento del 15%")
    let descuentoXCantidad = 0.15 * precioTotal
    console.log("Se descontaron al total a pagar unos $" + descuentoXCantidad)
    precioTotal -= descuentoXCantidad
}
console.log("El precio total a pagar por los " + cantidad + " planes es de: $" +precioTotal)





