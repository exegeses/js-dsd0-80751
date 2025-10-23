const caja = document.querySelector('#caja')
    // selector descencente
    //const dado = document.querySelector('#caja img')
    const dado = caja.children[0]
const boton = document.querySelector('#boton')

// funciones de control
function getNumero()
{
    let numero = Math.floor( Math.random() * 6 + 1 )
    return numero
}
function cambiarImagen( numero )
{
    // Cambiar imagen del dado según el número generado
    /*switch (numero){
        case 1: 
            dado.src = 'red/dice-1.png'
            break
        case 2: 
            dado.src = 'red/dice-2.png'
            break
        case 3: 
            dado.src = 'red/dice-3.png'
            break
        case 4: 
            dado.src = 'red/dice-4.png'
            break
        case 5: 
            dado.src = 'red/dice-5.png'
            break
        default: 
            dado.src = 'red/dice-6.png'
            break
    }*/
        dado.src = `red/dice-${numero}.png`
}
function playAudio()
{
    let sonido = new Audio('audio/dice.mp3')
    sonido.play()
}
// control
boton.onclick = () => {
                        let numero = getNumero()
                        cambiarImagen( numero )
                        playAudio()
                       }