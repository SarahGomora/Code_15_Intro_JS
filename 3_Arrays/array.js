// Todos los elementos que no sean primitivos vienen de Object, por lo tanto un array es un Object

// Array es una lista de elementos del mismo o diferente tipo que podemos manipular

var alumnos = ['Ana', 'Jorge', 'Maria'];
console.log(alumnos);

var edades = [1, 19, 32, 77];
console.log(edades);

var info = ['hola', 1, true, 200, 'silencio'];
console.log(info);

// acceder a un elemento de la lista
// Para conocer a un eleemento, necesito conocer su posición
// Las posiciones comienzan en 0
var precios =[122,135,46,56,2342];
console.log(precios);
console.log(precios[3]);

// métodos de los arreglos (todo lo que puede ser aplicado a un arreglo)

let iteracion = 0;
while(iteracion < 5) {
    console.log(`Valor de iteracion: ${iteracion}`)
    iteracion= iteracion + 1
}
// bucle sin valor de i, 
// let preguntaComida = 'no'
// while(preguntaComida === 'no') {
//     preguntaComida = prompt('¿quieres comer?')
// }

// console.log('provecho')

// EJERCICIOS

// -> Programa que va a evaluar un saludo, si el saludo es hola, imprime en la consola 'Hola' y pide con un prompt el nuevo saludo
// En el momento en que deje de ser hola termina el bucle e imprime 'Te voy a acusar'

// let saludo = "hola"
// while(saludo === 'hola') {
//     saludo = prompt('Hola')
// }

// alert('Te voy a acusar')

// Practica 2: Contador de cervezas
// Son administradores de un bar y por seguridad de sus clientes cuidan la cantidad de tragos que toman, por lo que solo tienen permitido vender un maximo de 7 por cliente.
// Hagan un programa en el que le pregunten al cliente si quiere otro trago, si si quiere otro trago incrementen la su contador de tragos, pero si quiere otro y ya tomo 7 esta noche, mandenlo a casa

let tragos = 0
while(tragos <8) {
    // (`Quieres otra cerveza?, ya llevas ${tragos}`)
    tragos = tragos + 1
}

console.log('Vaya a casa buen hombre')


// OBJETOS

// Es una variable que puede contener más variables, de un mismo o diferente tipo de dato.

// Una forma de crear un objeto es con "new"

const objeto = new Object();

typeof(objeto)

console.log(objeto)

const modulo = {
    titulo:'Intro a JS',
    duracionSemanas: 4,
    yaTermino: false
}

modulo.titulo

modulo.yaTermino

console.log(modulo.titulo)

console.log(modulo.yaTermino)

const mascota ={
    nombre: 'Firulais',
    jugueteFavorito: 'stick',
    raza: {
        color:'cafe',
        tamano:'chiquilin'
    }
}

console.log(mascota)

console.log(mascota.nombre)
console.log(mascota.jugueteFavorito)
// agregando la edad al objeto ya creado
mascota.edad = 10

console.log(mascota)

// eliminando una propiedad

delete mascota.jugueteFavorito

console.log(mascota)

const sarah = {
    edad: 10,
    nacionalidad: 'mexicana',
    estudio: 'Biologia',
    padres: {
        mama: 'Minerva',
        papa: 'Antonio'
    }
}

console.log(sarah)

// más maneras de generar arreglos

const arr1 = new Array(3)

const arr2 = new Array (1,2,3,4)

const arr3 = [1,2,3,4]

console.log(arr1)

console.log(arr2)

console.log(arr3)

// arreglo mixto

const arrMixto =['Sara', 29, true, () => console.log('hola'), 'Gómora']

console.log(arrMixto)

// Para saber el tamaño del arreglo:

arrMixto.length
console.log(arrMixto.length)

console.log(arrMixto[4])

//  Agregar datos al arreglo
// Se pueden agregar con un push

let nombres = ['Sergio', 'Hiromi', 'Luis', 'Rosa', 'Fer']

nombres.push('Rosaisela', 'Christopher')

console.log(nombres.length)

// También se pueden quitar datos con POP

nombres.pop()

console.log(nombres)

// Con este se elimina el último dato del arreglo y te regesa qué fue lo eliminado

let ultimoConcursanteEliminado =nombres.pop()

console.log(ultimoConcursanteEliminado)

// UNSHIFT agrega también elementos, pero estos se agregan al inicio del arreglo

nombres.unshift('karen', 'estiven')

console.log(nombres)

// SHIFT elimina el primer elemento del arreglo

const nombreEliminado = nombres.shift()

console.log(nombreEliminado)

// Para agregar también se puede usar CONCAT, en este se tiene que guardar el resultado en otra variable porque se pierde después de arrojarlo

nombres.concat('Ignacio', 'Pedro', 'Iris')

console.log(nombres)

let nombres2 = nombres.concat('Ignacio', 'Pedro', 'Iris')

console.log(nombres2)

// JOIN nos va a servir como separador, si se quieren separar todos los elementos con una coma, un punto o lo que sea, este lo hace.

let nombresString =nombres.join(', ')

console.log(nombresString)

// Con este se arrojan solo las posiciones seleccionadas o el rango seleccionado
let nombresSlice = nombres.slice(1, 3)

console.log(nombresSlice)

// INCLUDES nos permite saber si existe algún dato específico en el arreglo, nos arroja true o false

console.log(nombres)

console.log(nombres.includes('Pedro'))

console.log(nombres.includes('Fer'))

// INDEXOF muestra en qué lugar del arreglo (del inicio al final) está el primer elemento que tú estás buscando (por ejemplo, si tu buscas en una lista de que incluye muchos 'Luis', te arroja la posición del primero que encuentra en el arreglo)

nombres.indexOf('Luis', 0)  

console.log(nombres.indexOf('Luis', 0))

// el cero después de Luis significa desde qué posición quieres buscarlo

console.log(nombres.indexOf('Hiromi', 0))

// su homólogo es lastIndexOf que como su nombre lo indica estará buscando al final del arreglo

nombres.lastIndexOf ('Fer',0)

console.log(nombres.lastIndexOf ('Fer',0))


// ORDENACIONES permiten ordenar los datos

let losNumeros = [1,5,8,4,7,9,9,3,5,6,2,4,7,9]

console.log(losNumeros)

console.log(losNumeros.sort())

console.log(losNumeros.reverse())

// -----------------------------------------------------------------------------------------------------------------------------------------------

// FOR

let iterador = 0
while (iterador < 5) {
    console.log(iterador)
    iterador = iterador + 1
}

for (let iterador = 0; iterador < 5; iterador ++) {
    console.log(iterador)
}


// agregando objetos a un arreglo
let modulo2 = []

modulo2.push({
    nombre:'Cristopher',
    apellido:'Sauza',
})

modulo2.push({
    nombre: 'Mario',
    apellido:'Hdz',
})

modulo2.push({
    apellido:'Sauza',
})

modulo2.push({
    nombre:'Cesar',
    apellido:'Castillo',
})

console.log(modulo2)

for(let i = 0; i < modulo2.length; i++) {
    console.log(`El apellido es ${modulo2[i].apellido}`)
}

modulo2.push({
    // nombre:prompt('nombre'),
    // apellido:prompt('apellido'),
})

console.log(modulo2[4])

// EJERCICIOS WHILE For 

// Practica 3: Alta de alumnos
// Inicien un arreglo vacio de alumnos
// Con un ciclo while pregunten si quieren dar de alta un nuevo alumnos, si si, agreguen  un nuevo objeto alumno al arreglo, pidiendo su nombre y apellido por prompt, si no, terminen el ciclo e impriman la lista de alumnos
// Si quieren dar el extra mille, entonces al salir del ciclo con un ciclo for, iteren sobre todos los elementos del arreglo e impriman nombre y aprellido concatenado con template string

let altas =[]
let agregarAlumno = 'si';
while(agregarAlumno === 'si') {
    agregarAlumno = prompt('¿Quieres agregar un nuevo alumno?')

    agregarAlumno.push ({
        nombre:prompt('Escribe el nombre'),
        apellido:prompt('Escribe el apellido paterno'),
        materno:prompt('Escribe el apellido materno'),
    });
    
}

console.log(altas)