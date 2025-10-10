// ubicar elementos dentreo del DOM
const cajaTexto = document.querySelector('#cajaTexto')
const cajaTexto2 = document.querySelector('#cajaTexto2')

let primera = 'hola'
let segunda = 'mundo'

/*
    Concatenar significa unir (pegar) cadenas de caracteres
    Para esto utilizamos el símbolo +
*/
cajaTexto.textContent = primera +' '+ segunda

/*
    Interpolar significa que vamos de algún modo a 
    "despejar" el contenido de las variables
    Todo el contenido se inserta dentro del símbolo backtick ``
    Y a cada una de las variables se las envuelve en
        ${variable}
*/
cajaTexto2.textContent = `${primera} ${segunda}`
