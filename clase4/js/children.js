// nav
const nav = document.querySelector('nav')
console.log(nav)    
// botones
const btnUno = nav.children[0]
const btnDos = nav.children[1]
const btnTres = nav.children[2]

// caja de texto
const cajaTexto = document.querySelector('#cajaTexto')

//control de caja de texto
cajaTexto.textContent = 'ningún botón pulsado'
btnUno.onclick = function()
                {
                    cajaTexto.textContent = 'botón Uno pulsado'
                }
btnDos.onclick = function()
                {
                    cajaTexto.textContent = 'botón Dos pulsado'
                }
btnTres.onclick = function()
                {
                    cajaTexto.textContent = 'botón Tres pulsado'
                }
