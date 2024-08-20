# DayTwo

**Reto:** Crear un programa en JavaScript que simule una aplicación de registro, pidiendo al usuario su nombre, edad y lenguaje de programación que está estudiando. El reto consiste en almacenar estas respuestas en variables y luego mostrar un mensaje personalizado. Además, se incluye un ejercicio opcional para interactuar con el usuario basado en su gusto por el lenguaje de programación.

# Interacción con el Usuario en JavaScript

Este proyecto muestra cómo capturar y usar las respuestas del usuario en JavaScript utilizando `prompt()` para recibir información y `alert()` para mostrar mensajes personalizados. A través de este ejercicio, se aprende a manejar entradas del usuario, almacenar datos en variables y utilizar estructuras condicionales para proporcionar respuestas basadas en las elecciones del usuario.

## Código Original

### Programa de Registro de Usuario

El siguiente código simula una aplicación que pregunta al usuario por su nombre, edad y lenguaje de programación. Luego, muestra un mensaje personalizado con las respuestas proporcionadas y realiza una pregunta adicional opcional sobre el gusto del usuario por el lenguaje.

```javascript
// Preguntar al usuario su nombre
const nombre = prompt("¿Cuál es tu nombre?");

// Preguntar al usuario su edad
const edad = prompt("¿Cuántos años tienes?");

// Preguntar al usuario qué lenguaje de programación está estudiando
const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

// Mostrar un mensaje personalizado con las respuestas del usuario
alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

// Ejercicio opcional: Preguntar si le gusta estudiar el lenguaje
const gustoEstudio = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);

// Mostrar un mensaje según la respuesta del usuario
if (gustoEstudio == 1) {
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else if (gustoEstudio == 2) {
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
} else {
    alert("Respuesta no válida. Por favor, responde con 1 o 2.");
}
```
# Funcionalidad
El código realiza las siguientes tareas:

## Captura de Información del Usuario:

Utiliza prompt() para solicitar al usuario su nombre, edad y el lenguaje de programación que está estudiando.
Almacena las respuestas en variables para su uso posterior.

## Mostrar Mensaje Personalizado:

Usa alert() para mostrar un mensaje que incluye las respuestas del usuario, proporcionando una experiencia personalizada.

## Ejercicio Opcional:

Pregunta adicional sobre si le gusta estudiar el lenguaje proporcionado.
Dependiendo de la respuesta, muestra un mensaje positivo o sugiere probar otros lenguajes.

# Propósito
El objetivo es aprender a interactuar con el usuario en una aplicación web utilizando JavaScript. Este código es útil para practicar la captura de datos de entrada del usuario y la personalización de la experiencia del usuario basada en sus respuestas. Además, el ejercicio opcional introduce el uso de estructuras condicionales para manejar respuestas y proporcionar retroalimentación adecuada.

Este proyecto es una excelente manera de comenzar a trabajar con interacciones básicas en JavaScript y mejorar la comprensión de cómo manejar la entrada y salida de datos en aplicaciones web simples.