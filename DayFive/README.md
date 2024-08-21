# 7DaysOfCode

## Desafío DayFive

**Reto:** Crear un programa en JavaScript para gestionar una lista de compras categorizada. El usuario debe poder agregar alimentos a la lista, especificar su categoría y, al final, ver un resumen de la lista organizada por categorías.

**Funcionalidad:**
1. Preguntar al usuario si desea agregar un alimento a la lista.
2. Si la respuesta es "sí", solicitar el nombre del alimento y la categoría (frutas, lácteos, congelados, dulces, etc.).
3. Permitir agregar múltiples alimentos con sus respectivas categorías.
4. Si la respuesta es "no", mostrar la lista de compras organizada por categorías.

**Código JavaScript:**

```javascript
let listaDeCompras = {
    frutas: [],
    lacteos: [],
    congelados: [],
    dulces: []
};

function agregarAlimento() {
    let agregar = prompt("¿Deseas agregar un alimento a tu lista de compras? (sí/no)");
    while (agregar.toLowerCase() === 'sí') {
        let alimento = prompt("¿Qué alimento deseas agregar?");
        let categoria = prompt("¿En qué categoría se encaja este alimento? (frutas, lácteos, congelados, dulces)");

        if (listaDeCompras[categoria]) {
            listaDeCompras[categoria].push(alimento);
        } else {
            console.log("Categoría no reconocida.");
        }

        agregar = prompt("¿Deseas agregar otro alimento? (sí/no)");
    }

    mostrarListaDeCompras();
}

function mostrarListaDeCompras() {
    console.log("Lista de compras:");
    for (let categoria in listaDeCompras) {
        if (listaDeCompras[categoria].length > 0) {
            console.log(`${capitalizeFirstLetter(categoria)}: ${listaDeCompras[categoria].join(", ")}`);
        } else {
            console.log(`${capitalizeFirstLetter(categoria)}:`);
        }
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

agregarAlimento();
```

# Descripción:

Este programa permite al usuario gestionar una lista de compras categorizada en JavaScript. Los alimentos se pueden agregar a diferentes categorías, y el usuario puede ver un resumen final de la lista organizada por categorías. Utiliza prompt para la entrada del usuario y console.log para mostrar la lista de compras.

## Autor

**Eder Said Martinez Ramirez**