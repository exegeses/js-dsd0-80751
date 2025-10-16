const hojaCss = document.querySelector('#hojaCss')
const contenedorSwitch = document.querySelector('#switch')
    const imgSwitch = contenedorSwitch.children[0]

/*
    flag: Es una variable auxiliar que va a tomar únicamente dos valores opuestos
        El objetivo de esta variable es controlar nuestro código
        Y además el código también va a cambiar el valor de esta variable
*/    
let tema = 'dark'

contenedorSwitch.onclick = function()
                            {
                                if( tema == 'dark' ){
                                    hojaCss.href = 'css/light.css'
                                    tema = 'light'
                                    imgSwitch.src = 'imgs/dark-switch.png'
                                }
                                else{
                                    hojaCss.href = 'css/dark.css'
                                    tema = 'dark'
                                    imgSwitch.src = 'imgs/light-switch.png'
                                }
                            }