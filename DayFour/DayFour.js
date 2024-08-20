// Número predefinido para el juego
const numeroSecreto = Math.floor(Math.random() * 11); // Genera un número aleatorio entre 0 y 10

// Mensaje de bienvenida
console.log("¡Bienvenido al juego de adivinar el número!");

// Número de intentos
let intentos = 3;
let numeroUsuario;
let acertado = false;

while (intentos > 0 && !acertado) {
    // Solicita al usuario que ingrese un número
    numeroUsuario = parseInt(prompt("Adivina el número entre 0 y 10:"));

    // Verifica si el número ingresado es correcto
    if (numeroUsuario === numeroSecreto) {
        console.log("¡Felicidades! Has adivinado el número.");
        acertado = true;
    } else {
        // Decrementa el número de intentos
        intentos--;
        if (intentos > 0) {
            console.log(`Número incorrecto. Te quedan ${intentos} intentos.`);
        } else {
            console.log(`Lo siento, has perdido. El número era ${numeroSecreto}.`);
        }
    }
}
