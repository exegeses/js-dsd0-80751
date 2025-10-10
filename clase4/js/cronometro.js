// Cronometro con milisegundos

// Variables de estado
let tiempoEnMilisegundos = 0; 
let intervalo = null; // saber si cronómetro está parado

// constantes de funcionamiento
const display = document.getElementById('display');
const iniciarPausarBtn = document.getElementById('iniciarPausarBtn');

// Funcionamiento del cronómetro

function actualizarDisplay() {
    
    tiempoEnMilisegundos += 10;
    
    // Calcular Horas, Minutos, Segundos y Milisegundos

    let milisegundos = Math.floor((tiempoEnMilisegundos % 1000) / 10); 

    let segundos = Math.floor((tiempoEnMilisegundos / 1000) % 60);
    
    let minutos = Math.floor((tiempoEnMilisegundos / (1000 * 60)) % 60);

    let horas = Math.floor(tiempoEnMilisegundos / (1000 * 60 * 60));

    // Constantes con dos dígitos para mostrar en el display

    const h = String(horas).padStart(2, '0');
    const m = String(minutos).padStart(2, '0');
    const s = String(segundos).padStart(2, '0');
    const ms = String(milisegundos).padStart(2, '0'); 

    // mostrar el display

    display.textContent = `${h}:${m}:${s}:${ms}`; // se usa ${} para insertar dinámicamente el valor de la variable h, m, s y ms
}

// Funcionamiento de los botones

function iniciarPausar() {
    if (intervalo) {
        // Pausar
        clearInterval(intervalo);
        intervalo = null;
        iniciarPausarBtn.textContent = 'Reanudar';
    } else {
        // INICIAR/REANUDAR
        intervalo = setInterval(actualizarDisplay, 10); 
        iniciarPausarBtn.textContent = 'Pausa';
    }
}

function resetear() {
    // Detiene el intervalo
    clearInterval(intervalo); 
    intervalo = null;
    
    tiempoEnMilisegundos = 0;
    
    // Actualizar el display y el botón
    display.textContent = '00:00:00.00';
    iniciarPausarBtn.textContent = 'Iniciar';
}
// Asignar que los botones llamen a las funciones
document.getElementById('iniciarPausarBtn').addEventListener('click', iniciarPausar);
document.getElementById('resetBtn').addEventListener('click', resetear);

// Establecer el display inicial
display.textContent = '00:00:00.00';