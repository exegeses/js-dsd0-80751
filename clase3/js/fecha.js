/*
    Mostrar la fecha actual
    formato:    dd/mm/yyyy  02/10/2025
*/

// ubicar elementos dentro del DOM
const cajaTexto = document.querySelector('#cajaTexto')

// creamos objeto de fecha
const fecha = new Date()
console.log(fecha)

// Obtenemos el número del día del mes actual (1~31)
let diaMes = fecha.getDate()
if(diaMes < 10){
    diaMes = '0'+ diaMes
}
console.log('dia de mes:', diaMes)

// Obtenemos el número de mes actual
let mes = fecha.getMonth() + 1
if(mes < 10){
    mes = '0'+ mes
}
console.log('mes actual:', mes)

// Obtenemos el número del año actual
let anio = fecha.getFullYear()
console.log('año:', anio)


// Imprimimos la fecha dentro del span
cajaTexto.textContent = diaMes +'/'+ mes +'/'+ anio