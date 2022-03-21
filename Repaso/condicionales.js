// IF
// Vamos a tener una condición para poder realizar una acción



if (10 > 5) {
    console.log('sí se cumple la condición')
}

if ('hola' === 'hola') {
    console.log('Sí se cumple la condición')
}

if (10 === 10) {
    console.log('Sí son iguales')
}

if (10%2 === 0) {
    console.log('sí se cumple la cuarta condición')
}

var edad = 19;

if(edad >= 18) {
    console.log('sí puedes pasar')
}

// IF ELSE tengo una condición para realizar una acción y además tengo una acción a realizar en caso de que la condición no se cumpla

var edadAlumna = 10;

if(edadAlumna > 12) {
    console.log('eres adolescente')
} else {
console.log('eres una niña')
}

var nombre = 'Mariano'

if(nombre=== 'Luis') {
    console.log ('Hola, Luis');
} else {
    console.log('Hola extraño');
}

// IF ELSE IF -> Sirve para tener más de una condición

var nombreAlumno = 'Sarah'

if(nombreAlumno === 'Jorge') {
    console.log('Eres el ganador');
} else if (nombreAlumno === 'Luis') {
    console.log('Ganaste el segundo lugar');
} else if (nombreAlumno === 'Rogelio') {
    console.log('Eres el tercer lugar');
} else {
    console.log('Sigue participando');
}


// EJERCICIOS CONDICIONALES

// Arnoldo le gustan mucho los números y quiere saber más de ellos, él denomina números cool a los que son divisibles entre 5, el quiere crear un programa en el cual el ingrese un número y le diga si es cool o no, ¿puedes ayudarlo?

var numero = 190

if (numero % 5 === 0) {
    console.log('Este sí es un número COOL')
} else {
    console.log('¡aburrido!')
}


// Humberto está repartiendo códigos por toda la ciudad. El quiere crear un programa que cuando un usuario ingrese un código este despliegue un mensaje. Para el código "happy" el quiere desplegar el mensaje "cool bro, the life is short" y para el código "sad" él quiere, desplegar el mensaje "go for tacos bro, tacos = smile"

// Desplegar el mensaje "código inválido" si el código no cumple con las condiciones anteriores

var codigo = 'hsad'

if (codigo === 'happy') {
    console.log ('Cool bro, the life is short');
} else if (codigo === 'sad') {
    console.log('go for tacos bro, tacos = smile');
} else {
    console.log('Código invalido')
}

// Paco está haciendo un videojuego y necesita hacer un programa que determine la jerarquía de usuario de acuerdo a su nivel, las jerarquías son "paladin" : nivel 0 -10, "caballero dorado" : nivel 11 - 30, "dios destructor": 31 - 50

var puntuacion = 0

if(puntuacion >= 0 && puntuacion <=10) {
    console.log('Paladin');
} else if (puntuacion >= 11 && puntuacion <=30) {
    console.log('Caballero dorado');
} else if (puntuacion >=31 &&  puntuacion <=50) {
    console.log('Dios destructor')
}

// En este ejercicio se agregó un &&, entonces todas las condiciones deben cumplirse para que arroje un TRUE o se cumpla la acción que se ha elegido
// -----------------------------------------------------------------------------------------------


// Crea una aplicación web empleando JavaScript que permita a dos usuarios jugar una partida de piedra, papel o tijeras.

// Pide al jugador1 y al jugador2 que escriban su elección mediante prompts. Compara los valores ingresados y muestra en pantalla, mediante un alert o console.log, quién fue el jugador ganador. && ||

// let jugador1 = prompt('Jugador 1, elige tu movimiento')
// let jugador2 = prompt('Jugador 2, elige tu movimiento')

// if(jugador1 === 'piedra' && jugador2 === 'papel') {
//     alert('Jugador 2 gana');
// } else if (jugador1 === 'papel' && jugador2 === 'piedra') {
//     alert('Jugador 1 gana');
// } else if (jugador1 === 'tijeras'&& jugador2 === 'papel') {
//     alert('Jugador 1 gana ');
// } else if(jugador1 === 'papel' && jugador2 === 'tijeras') {
//     alert('Jugador 2 gana')
// } else if (jugador1 === 'piedra' && jugador2 === 'tijeras') {
//     alert('Jugador 1 gana');
// } else if (jugador1 === 'tijeras' && jugador2 === 'piedra') {
//     alert('Jugador 2 gana')
// } else if (jugador1 === 'tijeras' && jugador2 === 'tijeras'){
//     alert('Empate, intenten otra vez');
// } else if (jugador1 === 'papel' && jugador2 === 'papel'){
//     alert('Empate, intenten otra vez'); 
// } else if (jugador1 === 'piedra' && jugador2 === 'piedra'){
//     alert('Empate, intenten otra vez'); }


    // Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario, mediante prompts, y muestre en pantalla, mediante un alert, cuál es el mayor de los tres números. 

    let numero1 = prompt('Escribe un número')
    let numero2 = prompt('Escribe otro número')
    let numero3 = prompt('Escribe otro número más')

    // if (numero1 > numero2 ||  numero1 > numero3) {
    //     alert(`${numero1} es mayor que ${numero2} y ${numero3}`);
    // } else if (numero2 > numero1 ||  numero2 > numero3) {
    //     alert(`${numero2} es mayor que ${numero1} y ${numero3}`);
    // } else if (numero3 > numero1 ||  numero3 > numero2) {
    //     alert(`${numero3} es mayor que ${numero1} y ${numero2}`);
    // }

// TERNARIOS 
// el símbolo ? es como si fuera el if
//  el símbolo : sustituye el else
