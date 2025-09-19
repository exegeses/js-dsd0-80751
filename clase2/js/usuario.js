/*
    - Pedimos al usuario que ingrese su nombre
    - Una vez que el usuario ingresa su nombre 
            almacenamos ese dato en memoria
    - Escribimos el nombre ingresado en el span
*/
// La ventana prompt()) sirve para que un usuario ingrese un dato
let usuario = prompt('ingrese su nombre')
// document.write('tu nombre es:', usuario)
// document.querySelector('#cajaTexto').textContent = usuario
const cajaTexto = document.querySelector('#cajaTexto')
cajaTexto.textContent = usuario