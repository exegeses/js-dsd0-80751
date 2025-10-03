/*
    Un parámetro completa y puede modificar levemente 
    el comportamiento de una función
    Cuándo enviamos un parámetro a una función, 
    este dato puede ser procesado para personalizar 
    levemente lo que hace nuestra función
*/

// declaración 
function saludar( nombre )
{
    console.log('hola', nombre)
}

// invocación
saludar('Rick')
saludar('Morty')
saludar('Summer')

/* ------------ */
function duplicarNumero( numero )
{
    if( !isNaN(numero) ){
        resultado = numero * 2 
    }
    else{
        resultado = 'debe ser un número'
    }
    console.log(resultado)
}


duplicarNumero( 10 )
duplicarNumero( 'manzana' )
