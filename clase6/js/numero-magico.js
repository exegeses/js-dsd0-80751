function getNumero()
{
    return Math.floor( Math.random()*10 +1 )
}
const numeroMagico = getNumero()
console.log(numeroMagico)

/* adivina el número */
let condicion = true
while( condicion ){
    let numeroUsuario = prompt('ingrese un número entre 1 y 10')
    if( numeroUsuario == numeroMagico ){
        alert('felicitaciones: adivinaste el número mágico: '+ numeroMagico)
        condicion = false
    }
    else{
        if( numeroUsuario > numeroMagico ){
            alert('te pasaste, intenta con un número más bajo')
        }
        else{
            alert('te quedaste corto, intenta con un número más alto')
        }
    }
}
