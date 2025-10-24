/*  función anónima  vs  función flecha */

// Función Anónima
const suma = function (a, b) {
    return a + b
}
// Función flecha
const sumaFlecha = (a, b) => {
    return a + b
}
  
// Sintaxis aún más corta para un solo retorno
//const sumarNoReturn = (a, b) => a + b; // Paréntesis opcionales para 1 parámetro
const sumarSinReturn = (a, b) => a + b 