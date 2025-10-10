// botones
const nav = document.querySelector('#nav')
const btnCeleste = nav.children[0]
const btnAmarillo = nav.children[1]
const btnNaranja = nav.children[2]
// article
const caja = document.querySelector('#caja')

// Declaramos funciones de control
function pintar( codigo, grados, texto )
{
    caja.style.backgroundColor = codigo
    caja.style.rotate = grados
    caja.textContent = texto
}

btnCeleste.onclick = function()
                    {
                        pintar('hsl(210, 90%, 70%)', '-45deg', 'Celeste')
                    }
btnAmarillo.onclick = function()
                    {
                        pintar('hsl(55, 90%, 60%)', '0deg', 'Amarillo')
                    }
btnNaranja.onclick = function()
                    {
                        pintar('hsl(30, 90%, 60%)', '40deg', 'Naranja')
                    }

