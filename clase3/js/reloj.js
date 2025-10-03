/* 
mostrar un reloj digital
formato hh:mm:ss    20:29:46
*/
const cajaTexto = document.querySelector("#cajaTexto")

// declaramos funciones de control
function mostrarReloj()
{
    // Creamos objeto de fecha
    const fecha = new Date()

    // generamos máscara de formato
    const formato = fecha.toLocaleTimeString(
        'es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
                }
            )


    // Obtenemos el número correspondiente a las horas
    let horas = fecha.getHours()
    console.log('horas:', horas)

    // Obtenemos el número correspondiente a los minutos
    let minutos = fecha.getMinutes()
    console.log('minutos:', minutos)

    // Obtenemos el número correspondiente a los segundos
    let segundos = fecha.getSeconds()
    console.log('segundos:', segundos)

    // Imprimimos en el span
    cajaTexto.textContent = formato //horas + ":" + minutos + ":" + segundos
}

// invocamos la función mostrarReloj()
mostrarReloj()

// Actualizamos el llamado a la función mostrarReloj()
setInterval( mostrarReloj, 1000 )