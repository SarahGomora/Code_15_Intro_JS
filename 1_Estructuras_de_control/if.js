let edad = 17

if(edad >=18) {
    alert("Eres mayor de edad")
}


// IF ELSE 

let edad = 17

if(edad >=18) {
    alert("Eres mayor de edad");
} else {
    alert("Eres menor de edad");
}


// TERNARIO: solo funciona en if/else, no en If anidados
// Estructura de un ternario : 
// condición ? qué pasa si se cumple : qué pasa si no se cumple

edad >= 18 ? alert("Eres mayor de edad") : alert("Eres menor de edad")


// If condicional o múltiple

let calificacion = 6;

if(calificacion <= 5){
    alert('Estás reprobado')
} else if(calificacion === 6) {
    alert('De panzanso')
} else if(calificacion === 7) {
    alert('Vas mejorando')
} else if (calificacion === 8) {
    alert('Sigue así')
} else if (calificacion === 9) {
    alert('Super')
} else if (calificacion === 10) {
    alert('Excelente')
} else { 
    alert('Calificación no valida')
}


// EJERCICIO PRACTICO

let edad = parseInt(prompt("¿Cuál es tu edad?"))

if(edad < 4) {
    alert("Eres muy joven aún")
} else if(edad >= 4 && <= 99) {
    alert("¡Diviertete!")
} else {
    alert("Lo siento :C, pero para el domino no hay límites")
}

// Mismo ejercicio pero en ternario

let edad = parseInt(prompt("cual es tu edad"))
edad <4 ? alert("muy joven") : edad <=99 ? alert("diviertete") : alert("lo siento pero no hay limite")


// SWITCH

let comidaFavorita = prompt("comida favorita:")

switch(comidaFavorita) {
    case "carne":
        alert("Eres carnivoro")
        break;
    case "lechuga":
        alert("Eres vegetariano")
        break;
    case "tofu":
        alert("Eres vegano")
        break;
    default: 
    alert("Eres alien?")
    break;
}

// Ejercicio Switch

let animal = prompt("Escribe un animal:")

switch(animal) {
    case "vaca":
        alert("Muuuuuuuuu")
        break;
    case "perro":
        alert("guaaau guaaau")
        break;
    case "gato":
        alert("miaaau")
        break;
    case "lobo":
        alert("auuuuuuuuh")
        break;
    case "pato":
        alert("cuac cuac")
        break;
        default:
            alert("Ese no hace ruido")
            break;
}