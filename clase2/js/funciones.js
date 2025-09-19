// Ubicamos elementos dentro del DOM
const caja = document.querySelector('#caja')

// Declaramos funciones de control
function pintarCeleste()
{
    caja.textContent = 'Celeste'
    caja.style.backgroundColor = 'lightblue'
    caja.style.rotate = '35deg'
}
function pintarAmarillo()
{
    caja.textContent = 'Amarillo'
    caja.style.backgroundColor = 'yellow'
    caja.style.rotate = '-24deg'
}
function pintarNaranja()
{
    caja.textContent = 'Naranja'
    caja.style.backgroundColor = 'orange'
    caja.style.rotate = '44deg'
}
