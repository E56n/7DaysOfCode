## Desafío DayThree

**Reto:** Crear un juego interactivo en JavaScript que permita al usuario elegir entre diferentes áreas de programación y tecnologías, y luego agregar más tecnologías a una lista.

**Funcionalidad:**
1. **Elección de Área:** El usuario selecciona entre Front-End o Back-End.
2. **Elección de Tecnología:** Dependiendo del área elegida, el usuario selecciona una tecnología específica.
3. **Especialización o Fullstack:** El usuario elige si quiere especializarse o convertirse en Fullstack.
4. **Lista de Tecnologías:** El usuario puede agregar varias tecnologías a una lista, con comentarios para cada una.

**Código:**
```javascript
// Pregunta inicial sobre el área de interés
const area = prompt("¿Quieres seguir hacia el área de Front-End o el área de Back-End?").toLowerCase();

let tecnologia;
let tecnologias = [];

// Verifica el área de interés
if (area === "front-end") {
    // Pregunta sobre la tecnología Front-End
    const frontEnd = prompt("¿Quieres aprender React o Vue?").toLowerCase();
    if (frontEnd === "react" || frontEnd === "vue") {
        alert(`¡Genial! Estás aprendiendo ${frontEnd}!`);
    } else {
        alert("Opción no válida. Por favor, elige entre React o Vue.");
    }
} else if (area === "back-end") {
    // Pregunta sobre la tecnología Back-End
    const backEnd = prompt("¿Quieres aprender C# o Java?").toLowerCase();
    if (backEnd === "c#" || backEnd === "java") {
        alert(`¡Genial! Estás aprendiendo ${backEnd}!`);
    } else {
        alert("Opción no válida. Por favor, elige entre C# o Java.");
    }
} else {
    alert("Área no válida. Por favor, elige entre Front-End o Back-End.");
}

// Pregunta sobre la especialización o desarrollo Fullstack
const especializacion = prompt("¿Quieres seguir especializándote en el área elegida o desarrollarte para convertirte en Fullstack?").toLowerCase();
if (especializacion === "especializar" || especializacion === "fullstack") {
    alert(`¡Excelente! Te estás enfocando en ${especializacion}.`);
} else {
    alert("Opción no válida. Por favor, elige entre especializar o Fullstack.");
}

// Pregunta sobre las tecnologías que quiere aprender
do {
    tecnologia = prompt("¿Hay alguna otra tecnología que te gustaría aprender?");
    if (tecnologia && tecnologia.trim() !== "") {
        alert(`¡Genial! Aprender ${tecnologia} es una excelente elección.`);
        tecnologias.push(tecnologia);
    }
} while (prompt("¿Deseas agregar otra tecnología? Responde 'ok' para sí o cualquier otra cosa para no").toLowerCase() === "ok");

// Muestra la lista de tecnologías aprendidas
if (tecnologias.length > 0) {
    alert(`Has agregado las siguientes tecnologías a tu lista de aprendizaje: ${tecnologias.join(", ")}`);
} else {
    alert("No has agregado ninguna tecnología a tu lista.");
}
```
## Propósito: 
Crear un juego de opciones que permita al usuario tomar decisiones y agregar tecnologías a una lista, aprendiendo a usar estructuras condicionales y bucles en JavaScript.