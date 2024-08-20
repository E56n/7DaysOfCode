# DayFour - Juego de Adivinanza de Número

En este desafío, creamos un juego simple en JavaScript donde el usuario intenta adivinar un número que la computadora ha seleccionado aleatoriamente. El usuario tiene tres intentos para acertar el número.

## Descripción del Reto

El objetivo es desarrollar un programa que:
1. Comienza con un número secreto predefinido o generado aleatoriamente entre 0 y 10.
2. Permite al usuario ingresar su suposición y verifica si es correcta.
3. Ofrece hasta 3 intentos para adivinar el número.
4. Informa al usuario si ha adivinado el número o si se ha quedado sin intentos, mostrando el número secreto al final.

## Código

Aquí está el código JavaScript para implementar el juego:

```javascript
// DayFour.js

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
```
# Explicación del Código
1. Número Secreto: Utiliza Math.random() para generar un número aleatorio entre 0 y 10.
2. Número de Intentos: Inicializa el número de intentos a 3.
3. Bucle While: Permite al usuario hacer intentos hasta que se agoten las oportunidades o adivine el número.
4. Entrada del Usuario: Usa prompt para capturar la entrada del usuario.
5. Verificación: Compara el número ingresado con el número secreto y proporciona retroalimentación.
6. Mensajes: Muestra mensajes adecuados según si el número es correcto o no, y revela el número secreto si se agotan los intentos.