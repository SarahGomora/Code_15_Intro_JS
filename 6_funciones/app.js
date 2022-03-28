// Funciones

//  Todo lo que hay entre {} es un scope

// function es la palabra reservada para las funciones

// Estructura de una función
function nombreFuncion () {
    console.log('mensaje dentro de una función');
// dentro de las llaves van las instrucciones 
// Las instrucciines declaradas dentro del cuerpo de una función solo se ejecutarán cuando yo invoque a la función
}

// Si yo coloco una instrucción fuera de una función esta se va a ejecutar de inmediato al abrir el console, si está dentro de una función solo se va a ejecutar hasta que se invoque.

// ¿CÓMO MANDAR LLAMAR, EJECUTAR, INVOCAR, CORRER UNA FUNCIÓN?

// R= Con su nombre y paréntesis

nombreFuncion();

function saludar() {
// Instrucciones
let nombre = "Sarah";
console.log(`Hola ${nombre}`)
}

saludar();

// La función se va a ejecutar todas las veces que yo lo coloque

// saludar();
// saludar();
// saludar();
// saludar();

// Acá se estaría ejecutando 4 veces


// A las funciones se les debe colocar un verbo como "mostrarDias", algo que sea relacionado a su función


// Ejercicio 1

function semana () {
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    console.log(dias)
}

semana();

// Ejericio 1 con FOR
function mostrarDias () {

let semana = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'] 
    for(let i = 0; i < semana.length; i++) {
        console.log(semana[i])
    }
}

mostrarDias();



// Ejercicio 2

function suma () {
    let numA = 2;
    let numB = 100;
    let sum = numA + numB;
    console.log(numA)
    console.log(numB)
    console.log(sum)

}

suma();


// Ejercicio 3

function mostrarLongitud () {
    let arreglo = [4,7,5,6,8,3,4,5,7,8,9,9,5,4];
    console.log(arreglo.length);
}

mostrarLongitud();

// 
// 

// USO DE PARÁMETROS EN FUNCIONES

// ¿Para qué sirven? Sirven para que las funciones sean dinámicas.

// Ejemplo sin parámetros

function sumarDosNumeros () {
    let n1 = 10;
    let n2 = 60;
    console.log(n1 + n2);
}

// Ejemplo con parámetros
// Dentro de los parentesis definimos la cantidad de parámetros
function sumarDosNumerosConParametros (numeroA, numeroB) {
let suma = numeroA + numeroB;
console.log(suma);

}

// Mandar llamar la función  y enviar valores como parámetros

sumarDosNumerosConParametros(2,5);
sumarDosNumerosConParametros(3,8);
sumarDosNumerosConParametros(50,896);

// 

function registrarUsuario (nombreUsuario) {
    console.log("bienvenide, " + nombreUsuario);

}

registrarUsuario("ana");
registrarUsuario("Julio");
registrarUsuario("Carlos");


function mostrarNumeros(limite) {
    for(let i = 0; i <= limite; i++) {
        console.log(i);
    }
}

mostrarNumeros(3)
mostrarNumeros(17)
