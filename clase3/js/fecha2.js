/*
Mostrar el día de la semana en español
    Jueves
*/
// Ubicar elemento dentro del DOM
const cajaTexto = document.querySelector('#cajaTexto')

// creamos objeto de fecha
const fecha = new Date()

// Obtenemos el número correspondiente al día de la semana
let numDiaDemana = fecha.getDay()
console.log('numero dia:', numDiaDemana)
/*
    0   -> Domingo
    1   -> Lunes
    2   -> Martes
    3   -> Miércoles
    4   -> Jueves
    5   -> Viernes
    6   -> Sábado
*/
/*
if(numDiaDemana == 0){
    cajaTexto.textContent = 'Hoy es Domingo'
}
else if(numDiaDemana == 1){
    cajaTexto.textContent = 'Hoy es Lunes'
}
else if(numDiaDemana == 2){
    cajaTexto.textContent = 'Hoy es Martes'
}
else if(numDiaDemana == 3){
    cajaTexto.textContent = 'Hoy es Miércoles'
}
else if(numDiaDemana == 4){
    cajaTexto.textContent = 'Hoy es Jueves'
}
else if(numDiaDemana == 5){
    cajaTexto.textContent = 'Hoy es Viernes'
}
else {
    cajaTexto.textContent = 'Hoy es Sábado'
}
*/
switch( numDiaDemana ){
    case 0:
        cajaTexto.textContent = 'Hoy es Domingo'
        break
    case 1:
        cajaTexto.textContent = 'Hoy es Lunes'
        break
    case 2:
        cajaTexto.textContent = 'Hoy es Martes'
        break
    case 3:
        cajaTexto.textContent = 'Hoy es Miércoles'
        break
    case 4:
        cajaTexto.textContent = 'Hoy es Jueves'
        break
    case 5:
        cajaTexto.textContent = 'Hoy es Viernes'
        break
    default:
        cajaTexto.textContent = 'Hoy es Sábado'
        break
}
