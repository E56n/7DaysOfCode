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
