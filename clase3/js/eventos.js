// Ubicamos elementos dentro del DOM
const btn = document.querySelector('#btn')
const cajaTexto = document.querySelector('#cajaTexto')

btn.onclick = function()
                {
                    cajaTexto.textContent = 'hiciste click'
                }

btn.onmouseover = function()
                {
                    cajaTexto.textContent = 'mouse sobre'
                }                
btn.onmouseout = function()
                {
                    cajaTexto.textContent = 'reposo'
                }                
