//
// Práctica 10 - Cronómetro
//

console.log('Esto es un cronómetro!');


//variables para este ejericicio
let hour = 0;
let minute = 0;
let second = 0;
//variables del ejercicio anterior
let timer;
const iniciar = document.getElementById('iniciar');
const detener = document.getElementById('detener');
const limpiar = document.getElementById('limpiar');
const chronometre = document.getElementById('cronometro');

// funcion que comienza el cronometro
// note que con esto se puede agrega los milisegundos siendo 00:00:00:00 
// modificando el setInterval y ponerlo en 100 o 10 para que vaya mas rapido asi probe que
// el reloj funcione 
function start(){
    timer = window.setInterval(stopTimer,1000);
}

// funcion que modifica le cronometro y agrega horas y minutos 
function stopTimer(){
    
    
    second++;
    //Variables nuevas
    let hh;
    let mm;
    let ss;
    
    if(second > 59 ){
        minute++;  // incrementa minutos despues de 59 segundos
        second = 0;
    }

    if(minute > 59){
        hour++; // incrementa horas despues de 59 minutos
        minute = 0;
    }

    if(hour > 24){
        hour++;
        hh = 0 ;
    }

    // apartir del numero 10 se agrega otro numero
    // intento sin estos if y else pero me daba error  
    if(second < 10){
        ss = '0' + second;
    }else{
        ss = second;
    }

    if(minute < 10){
        mm = '0' + minute;
    }else{
        mm = minute;
    }

    if(hour < 10){
        hh = '0' + hour;
    }else{
        hh = hour;
    }

    document.getElementById("cronometro").innerHTML = `${hh}:${mm}:${ss}`; // string cronometro
}
// detiene el cronometro
function stops(){
    window.clearInterval(timer);
}
// reinicia el cronometro 
// me di cuenta que esto se puede modificar para que inicie donde quedo si se quisiera agregar otro
// boton resume para seguir donde se detuvo el cronometro
function reset(){
    window.clearInterval(timer);
    count = '00:00:00'; 
    hour= 0;
    minute = 0;
    second = 0;
    chronometre.innerHTML = count; 
}

// llamar las funciones dentro de los eventos 
iniciar.addEventListener('click', start);
detener.addEventListener('click', stops);
limpiar.addEventListener('click', reset);

