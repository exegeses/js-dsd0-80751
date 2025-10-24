/*
    mientras ( condición ){
        código a iterar
    }
*/
let condicion = true
let n = 0
while( condicion ){
    n++
    console.log( 'iteración:', n )
    condicion = prompt('ingresa un dato')
}
document.write('fun de bucle')