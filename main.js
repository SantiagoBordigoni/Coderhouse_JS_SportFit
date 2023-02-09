// SELECCIONADOR DE PLANES DE GIMNASIO
// EN ESTE CICLO OBTENEMOS INFORMACION DE CADA PLAN SI ASI LO DESEARAMOS
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
// SELECCIONAMOS LA CANTIDAD DE PERSONAS QUE DESEAMOS ASOCIAR Y EN CADA CICLO ELEGIMOS EL PLAN PARA LA PERSONA
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
    // SE VAN SUMANDO LOS MONTOS DE CADA PLAN SELECCIONADO
}
// EN ESTE CICLO LLEGADO EL CASO QUE ASOCIEMOS A MAS DE 2 PERSONAS, TENEMOS DESCUENTO POR CANTIDAD
if (cantidad>=3){
    alert("Gracias! Por la compra de 3 o más planes se te otorgó un descuento del 15%")
    let descuentoXCantidad = 0.15 * precioTotal
    console.log("Se descontaron al total a pagar unos $" + descuentoXCantidad)
    precioTotal -= descuentoXCantidad
}
console.log("El precio total a pagar por los " + cantidad + " planes es de: $" +precioTotal)

// SE INCLUYE CARRITO DE COMPRAS DE ARTICULOS DE GYM ADEMAS DE LA MEMBRESIA PARA ACCEDER AL GIMNASIO



// ACA TENEMOS EL ARRAY CON LOS DISTINTOS OBJETOS, QUE SERIAN LOS ARTICULOS DE GIMNASIO CON SUS RESPECTIVOS ATRIBUTOS
const equipoGym = [
    {
      nombre: "Pesas de 5 kg",
      precio: 2500,
      stock: 10
    },
    {
      nombre: "Pesas de 10 kg",
      precio: 4000,
      stock: 5
    },
    {
      nombre: "Barra de levantamiento de pesas",
      precio: 7000,
      stock: 2
    },
    {
      nombre: "Mancuernas de 25 kg",
      precio: 15000,
      stock: 3
    },
    {
      nombre: "Rack de entrenamiento",
      precio: 60000,
      stock: 1
    }
  ];

//   EN PRINCIPIO NO TENEMOS ARTICULOS SELECCIONADOS, PERO DEFINIMOS LA LISTA PORQUE AL SELECCIONAR SE VAN A IR CARGANDO AHI
let equipoSeleccionado = [];
//   LA FUNCION AGREGAR AL CARRITO TOMA EL PARAMETRO QUE DA EL USUARIO, LA ENTRADA Y BUSCA ESE ARTICULO. 
function agregarAlCarrito(nombreEquipo) {
    const equipo = equipoGym.find( item => item.nombre.toLowerCase() === nombreEquipo.toLowerCase());
    if (!equipo) {
      console.log("Artículo no encontrado");
      return;
    }
    if (equipo.stock === 0) {
      console.log("Artículo sin stock");
      return;
    }
    equipoSeleccionado.push(equipo);
    equipo.stock -= 1;
    console.log(`Artículo "${equipo.nombre}" agregado al carrito`);
    // EN CASO DE EXISTIR Y HABER STOCK, SE AGREGA A LA LISTA DE EQUIPOS SELECCIONADOS Y SE REDUCE EN UNA UNIDAD EL STOCK DE LA LISTA DE EQUIPO DISPONIBLE
  }
  
function calcularTotal() {
    let total = 0;
    for (const equipo of equipoSeleccionado) {
        total += equipo.precio;
    }
    console.log(`Total: $${total}`);
  }

let articulo =prompt("Ingrese el articulo que desea comprar o 'salir':");
while (articulo!="salir"){
    agregarAlCarrito(articulo)
    articulo= prompt("Ingrese el articulo que desea comprar o 'salir':");}

calcularTotal();
