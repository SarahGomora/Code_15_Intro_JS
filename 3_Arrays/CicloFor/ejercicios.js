// Tengo un arreglo
let calificaciones = [100,80,76,32,78,45,99,65,97,96,54,35,24,57,23]
// Lo ordeno de mayor a menor
let calificacionesOrdenadas = calificaciones.sort(function(a, b) {return a-b});

console.log(calificacionesOrdenadas);

// El valor mayor siempre va a estar al final del acomodo, por lo que su lugar de "atrás para delante" siempre sería -1
let numMayor = calificacionesOrdenadas[calificacionesOrdenadas.length -1]

console.log('numMayor', numMayor);

// el valor menor siempre estará al inicio, por lo que su posición siempre será 0
let numMenor = calificacionesOrdenadas [0];

console.log(numMenor)

var sumatoria = 0;

for(var i = 0; i < calificaciones.length; i++) {
    sumatoria = sumatoria + calificaciones [i];
}

console.log(sumatoria)

var promedio =  sumatoria/calificaciones.length;

console.log(promedio)


// Fibonacci

let limite = 5
let serie = [0,1];

for(var i = 2; i < limite; i++) {
    serie[2] + serie[1]
    serie.push(serie[i-1] + serie [i-2]);
}

console.log(serie)


// Con un array vacio

let fib = []
fib[0] = 0
fib[1] = 1

for (let i = 2; i<= 10; i++) {
    fib[i] = fib[i-2] + fib[i-1]
}

console.log(fib[i])