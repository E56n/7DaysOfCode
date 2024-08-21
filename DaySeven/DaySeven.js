// Función para sumar dos números
function suma(a, b) {
    return a + b;
}

// Función para restar el segundo número del primero
function resta(a, b) {
    return a - b;
}

// Función para multiplicar dos números
function multiplicacion(a, b) {
    return a * b;
}

// Función para dividir el primer número por el segundo
// Incluye una verificación para evitar la división por cero
function division(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
}

// Función para elevar el primer número (base) al segundo número (exponente)
function exponenciacion(a, b) {
    return Math.pow(a, b);
}

// Función para calcular la raíz cuadrada de un número
// Incluye una verificación para evitar calcular la raíz cuadrada de un número negativo
function raizCuadrada(a) {
    if (a < 0) {
        return "No se puede calcular la raíz cuadrada de un número negativo";
    }
    return Math.sqrt(a);
}

// Función para calcular el módulo (resto) de la división del primer número por el segundo
function modulo(a, b) {
    return a % b;
}

// Función para calcular el valor absoluto de un número
function valorAbsoluto(a) {
    return Math.abs(a);
}

// Función para mostrar el menú de operaciones disponibles en la consola
function mostrarMenu() {
    console.log("Seleccione una operación:");
    console.log("1: Suma");
    console.log("2: Resta");
    console.log("3: Multiplicación");
    console.log("4: División");
    console.log("5: Exponenciación");
    console.log("6: Raíz Cuadrada");
    console.log("7: Módulo");
    console.log("8: Valor Absoluto");
    console.log("9: Salir");
}

// Función principal que controla el flujo de la calculadora
function calculadora() {
    let continuar = true;  // Variable para controlar la ejecución del ciclo

    while (continuar) {  // Ciclo que se repite mientras el usuario no elija salir
        mostrarMenu();  // Muestra el menú de operaciones
        let opcion = parseInt(prompt("Ingrese el número de la operación:"));  // Solicita al usuario elegir una operación
        
        let num1, num2, resultado;

        // Estructura switch para seleccionar la operación correspondiente
        switch (opcion) {
            case 1:
                num1 = parseFloat(prompt("Ingrese el primer número:"));
                num2 = parseFloat(prompt("Ingrese el segundo número:"));
                resultado = suma(num1, num2);
                break;
            case 2:
                num1 = parseFloat(prompt("Ingrese el primer número:"));
                num2 = parseFloat(prompt("Ingrese el segundo número:"));
                resultado = resta(num1, num2);
                break;
            case 3:
                num1 = parseFloat(prompt("Ingrese el primer número:"));
                num2 = parseFloat(prompt("Ingrese el segundo número:"));
                resultado = multiplicacion(num1, num2);
                break;
            case 4:
                num1 = parseFloat(prompt("Ingrese el primer número:"));
                num2 = parseFloat(prompt("Ingrese el segundo número:"));
                resultado = division(num1, num2);
                break;
            case 5:
                num1 = parseFloat(prompt("Ingrese la base:"));
                num2 = parseFloat(prompt("Ingrese el exponente:"));
                resultado = exponenciacion(num1, num2);
                break;
            case 6:
                num1 = parseFloat(prompt("Ingrese el número:"));
                resultado = raizCuadrada(num1);
                break;
            case 7:
                num1 = parseFloat(prompt("Ingrese el primer número:"));
                num2 = parseFloat(prompt("Ingrese el segundo número:"));
                resultado = modulo(num1, num2);
                break;
            case 8:
                num1 = parseFloat(prompt("Ingrese el número:"));
                resultado = valorAbsoluto(num1);
                break;
            case 9:
                // Opción para salir del programa
                console.log("Hasta la próxima");
                continuar = false;  // Detiene el ciclo
                break;
            default:
                // Si el usuario ingresa una opción inválida, se muestra un mensaje de error
                console.log("Opción inválida. Intente de nuevo.");
                continue;  // Vuelve al inicio del ciclo
        }

        // Si el usuario no ha elegido salir, muestra el resultado de la operación
        if (continuar) {
            console.log(`El resultado es: ${resultado}`);
        }
    }
}

// Llamada a la función principal para iniciar la calculadora
calculadora();
