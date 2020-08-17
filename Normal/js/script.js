//
// Práctica 10 - Cronómetro
//

console.log('Esto es un cronómetro!');


let timer;
let count= 0; // contador que va aumentando 
const iniciar = document.getElementById('iniciar');
const detener = document.getElementById('detener');
const limpiar = document.getElementById('limpiar');
const chronometre = document.getElementById('cronometro');

// inicia el cronometro si tiene menos 0 va más rapido
function start(){
    timer = window.setInterval(stopTimer,1000);
}
// funcion que contiene el contador 
function stopTimer(){
   
    chronometre.innerHTML = count++; 
}

// funcion que detiene el cronometro 
function stops(){
    window.clearInterval(timer);
}

// funcion que reinicia el cronometro desde 0
function reset(){
    window.clearInterval(timer)
    count = 0; // reinicia desde 0 esta fuera del contador principal 
    chronometre.innerHTML = count; 
}

// click en los botones llama a las funciones y realiza lo que tiene adentro 
iniciar.addEventListener('click', start);
detener.addEventListener('click', stops);
limpiar.addEventListener('click', reset);

