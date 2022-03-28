// Ejercicio 1

function mostrarNumero (numeroA) {
    let positivo =(prompt ("Ingresa un número"));

    if (positivo >=0) {
        console.log("Es positivo");
    } else {
        console.log("Es negativo")
    }
}

mostrarNumero ();


// Ejercicio 1 con return

function mostrarNumero (numeroA) {
    let positivo =(prompt ("Ingresa un número"));

    if (positivo >=0) {
       return "Es positivo";
    } else {
        return "Es negativo"
    }
}

mostrarNumero ();




// Ejercicio 2

function mostrarAhorro (nombre, monto) {
let cliente = (`El cliente ${nombre}, tiene un ahorro de ${monto} en su fondo de ahorro`);
console.log(cliente)
}

mostrarAhorro ("Ana", 300);
mostrarAhorro ("Pedro", 13000)


// Ejercicio 2 con return

function mostrarAhorro (nombre, monto) {
    let cliente = (`El cliente ${nombre}, tiene un ahorro de ${monto} en su fondo de ahorro`);
    return cliente
    }
    
    mostrarAhorro ("Ana", 300);
    mostrarAhorro ("Pedro", 13000)

// Ejercicio 3

function calcularPromedio () {
    let calif = [5,6,7,8,9,10,10,4,5,4,7,6,8,9,0,7,5,4,6,9,10] {
        let valorSumador = 0;

        for(let i = 0; i < calif.length; i++) {
            sumas = valorSumador + calificaciones[i];
            let promedioTotal = sumas/calif.length
console.log(promedioTotal)
        }
// Ninguno me dio el resultado

        function calcularPromedio () {
            let calif = [5,6,7,8,9,10,10,4,5,4,7,6,8,9,0,7,5,4,6,9,10];
        let sum = 0;
        
        for(let i = 0; i < calif.length; i++) {
        sum += calif[i];
        
        let promedio = sum[-1]/calif.length
        console.log(promedio);
        }
        }
        
        calcularPromedio();

// Ejercicio 4

function mostrarNumerosPares () {
    let numero = (prompt ("Ingresa un número"));

    if(numero % 2 === 0) {
        console.log('Número PAR')
    } else {
        console.log('Número INPAR')
    }
}

mostrarNumerosPares();

// Ejercicio 5

function mostrarPromo (codigo) {
 let promo = (prompt('Escribe tu código'));

 if(promo === 'bimbo1') {
     alert('Obtuviste 3.00 MXN de descuento en cualquier producto Bimbo')
 } else if(promo === 'bimbo2') {
     alert('Obtuviste un Nito gratis');
 } else if(promo === 'bimbocho') {
     alert('Obtuviste un descuento de 5.00 MXN en Bimbuñuelos Bimbo')
 }
}

mostrarPromo();

// Ejercicio 6 Crear una función que reciba base y altura de un triángulo y nos muestre cuál es su perímetro




// Ejercicio 7 Crear una función que reciba base y altura de un triángulo y nos muestre cuál es su área

function area(base,altura) {
    let datos = base*altura/2
    console.log(datos)
}

area()

// // Ejercicio  11. Crear una función que reciba 1 número y me lo muestre al cubo

function cuadrado (numero) {
    let square = numero*numero
    console.log(square)
}

cuadrado();


// ----------------------------------------------------------------------



function calcularArea (lado) {
    let area = lado * lado;
    return area;
}


// return nos indica el final de la función ( si encuentra más líneas de código después, las va a ignorar)

calcularArea(5);


// Ejemplo


function validarCodigo (codigo) {
    if(codigo.length === 3) {
        return 'Sí es válido'
    } else {
        return 'No es válido'
    }
}

validarCodigo()

// Ejercicios con return
// Ejercicio 1

function arrojarNumero() {
    let array = [300, 12, 98,45,64, 97,427, '', 87, 23,15,'miguelito' 123, 63, 56, 'valentina'];
    if (array >=0) {
        return array;
    } else (array === "") {
        return ("Es incorrecto")
    }
}

// ejercicio resuelto por hiromi

function filtrarArreglo(arreglo) {
    let nuevoArreglo = [];
    for(let i = 0; i < arreglo.length; i++) {
        if(typeof arreglo[i] === 'number') {
            nuevoArreglo.push(arreglo[i])
        }
    }
    return nuevoArreglo
}

filtrarArreglo([300, 12, 98,45,64, 97,427, '', 87, 23,15,'miguelito' 123, 63, 56, 'valentina'])
arrojarNumero();

// Ejercicio 2

function devolverPares (numero) {
   let pares = for(let i = 0; i<= numero; i+2)
    return devolverPares;
}

devolverPares(6);

console.log(pares)

// 

// Como lo resolvio Hiromi

function crearNumerosPares(limite) {
    let pares = [];
    for(let i = 0; i <= limite; i++) {
        if(i%2 === 0) {
            pares.push(i);
        }
    }
    return pares;
}
crearNumerosPares()



function crearNumerosPares2(limite) {
    let pares2 = [];
    for(let i = 0; i <= limite; i+=2) {
        
            pares2.push(i);
        }
        return pares2;
    }
    

crearNumerosPares2(


// ---------------------------------------------------------------------------------------------------------------------------------------------------------

function eleccionNumeros() {
    let arreglo = [1, 'dos', 3,4,'cinco', 'seis', 7,8,9,'diez', 'once'];
    if (arreglo === String) {
        return String
    } else if (arreglo === Number) {
        return 'Aquí na más puro número'
    }
}

eleccionNumeros();


// Ejercicio 3 Random


function crearNumRandom(limInferior, limSuperior) {
    let numRandom = Math.floor(Math.random() * (limSuperior - limInferior)) + limInferior;
    return numRandom;
}
crearNumRandom(1, 100);