// Ubicamos elementos dentro del DOM
const cajaTexto = document.querySelector('#cajaTexto')

/*
    Hacer una pregunta al usuario.
        - El usuario va a responder
        - Mostrar la respuesta dentro del span
 */

let respuesta = prompt('¿qué seleccionado ganó la copa del mundo Qatar 2022?')        

/*
    Vamos a comparar la respuesta enviada por el usuario
    - Si el usuario responde "Argentina"
        Entonces mostramos la palabra 'correcto'
    - Si el usuario responde algo diferente de "Argentina"
        Entonces mostramos la palabra 'incorrecto'
*/
if( respuesta == 'Argentina' ){
    // bloquea ejecutar si la condición es true
    cajaTexto.textContent = 'correcto'
}
else{
    // bloquea ejecutar si la condición es false
    cajaTexto.textContent = 'incorrecto'
}