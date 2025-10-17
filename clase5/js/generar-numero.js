const btn = document.querySelector('#btn')
const cajaTexto = document.querySelector('#cajaTexto')

/*
    Al pulsar el botón vamos a generar un número aleatorio.
    Éste número debe ser un número entero entre 1 ~ 10 (incluidos)
    Mostrar este número en el párrafo
*/
function generarNumero()
{
    // Más: es un objeto con atributos y métodos de funciones aritméticas
        // random() Retorna un número semi aleatorio
            //     Entre 0 (incluido) y 1 (excluido) con decimales
    let random = Math.random() 
    let numeroX10 = (random * 10) + 1
        // floor() Quita los decimales 
    let numero = Math.floor( numeroX10 )
    return numero    
}

btn.onclick = function()
            {
                cajaTexto.textContent = generarNumero()
                
            }