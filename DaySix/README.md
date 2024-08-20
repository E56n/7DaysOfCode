# Day Six: Gestión de Lista de Compras

¡Bienvenido al desafío del Día Seis! Hoy mejoraremos nuestro programa de lista de compras agregando la capacidad de eliminar elementos de la lista. Este desafío te ayudará a practicar cómo manejar y modificar listas en JavaScript.

## Desafío

**Reto:** Ampliar el programa de lista de compras para incluir una opción que permita eliminar alimentos de la lista. Además de agregar elementos, el programa ahora deberá manejar la eliminación de elementos, mostrando la lista actualizada y confirmando la eliminación.

**Funcionalidad:**
1. **Agregar o Eliminar Alimentos:** El usuario puede elegir entre agregar un nuevo alimento o eliminar uno existente de la lista.
2. **Eliminar Elementos:** Si se elige eliminar, el programa muestra los elementos actuales y permite al usuario seleccionar uno para eliminar.
3. **Confirmación y Mensajes:** El programa confirma la eliminación de un elemento y maneja casos donde el elemento no se encuentra en la lista.

## Cómo Funciona

1. **Agregar Alimentos:** El usuario puede agregar un alimento a una categoría específica (frutas, lácteos, congelados, dulces).
2. **Eliminar Alimentos:** El usuario puede eliminar un alimento existente. Si el alimento no se encuentra, el programa muestra un mensaje de error.
3. **Mostrar Lista:** Después de cada operación, se muestra la lista actualizada de alimentos organizados por categoría.

## Código

```javascript
// Objeto que almacenará las categorías y los alimentos en cada una
let listaDeCompras = {
    frutas: [],
    lacteos: [],
    congelados: [],
    dulces: []
};

// Función para agregar o eliminar alimentos de la lista de compras
function gestionarLista() {
    // Pregunta al usuario si desea agregar o eliminar un alimento
    let accion = prompt("¿Deseas agregar o eliminar un alimento de tu lista de compras? (agregar/eliminar)");
    
    // Bucle que continúa ejecutándose mientras la respuesta sea "agregar" o "eliminar"
    while (accion.toLowerCase() === 'agregar' || accion.toLowerCase() === 'eliminar') {
        if (accion.toLowerCase() === 'agregar') {
            // Solicita el nombre del alimento
            let alimento = prompt("¿Qué alimento deseas agregar?");
            
            // Solicita la categoría del alimento
            let categoria = prompt("¿En qué categoría se encaja este alimento? (frutas, lácteos, congelados, dulces)");
            
            // Verifica si la categoría es válida y agrega el alimento a la lista correspondiente
            if (listaDeCompras[categoria]) {
                listaDeCompras[categoria].push(alimento);
            } else {
                console.log("Categoría no reconocida."); // Muestra un mensaje si la categoría no es válida
            }
        } else if (accion.toLowerCase() === 'eliminar') {
            // Verifica si hay elementos en la lista para eliminar
            let categoriasConElementos = Object.keys(listaDeCompras).some(categoria => listaDeCompras[categoria].length > 0);
            if (categoriasConElementos) {
                // Muestra la lista actual de alimentos por categoría
                mostrarListaDeCompras();
                
                // Solicita el nombre del alimento a eliminar
                let alimentoAEliminar = prompt("¿Qué alimento deseas eliminar?");
                
                // Llama a la función para eliminar el alimento
                eliminarAlimento(alimentoAEliminar);
            } else {
                console.log("No hay elementos en la lista para eliminar."); // Muestra un mensaje si no hay elementos
            }
        }
        
        // Pregunta nuevamente si el usuario desea agregar o eliminar otro alimento
        accion = prompt("¿Deseas agregar o eliminar otro alimento? (agregar/eliminar)");
    }
    
    // Muestra la lista de compras organizada por categorías
    mostrarListaDeCompras();
}

// Función para eliminar un alimento de la lista de compras
function eliminarAlimento(alimento) {
    // Itera sobre cada categoría en la lista de compras
    for (let categoria in listaDeCompras) {
        // Encuentra el índice del alimento en la categoría actual
        let index = listaDeCompras[categoria].indexOf(alimento);
        
        // Verifica si el alimento se encuentra en la categoría
        if (index !== -1) {
            // Elimina el alimento de la categoría
            listaDeCompras[categoria].splice(index, 1);
            console.log(`El alimento ${alimento} ha sido eliminado de la categoría ${categoria}.`);
            return; // Sale de la función después de eliminar el alimento
        }
    }
    
    // Muestra un mensaje si el alimento no se encuentra en ninguna categoría
    console.log("¡No fue posible encontrar el elemento en la lista!");
}

// Función para mostrar la lista de compras organizada por categorías
function mostrarListaDeCompras() {
    console.log("Lista de compras:");
    
    // Itera sobre cada categoría en la lista de compras
    for (let categoria in listaDeCompras) {
        // Verifica si la categoría tiene alimentos
        if (listaDeCompras[categoria].length > 0) {
            // Muestra la categoría y los alimentos en esa categoría
            console.log(`${capitalizeFirstLetter(categoria)}: ${listaDeCompras[categoria].join(", ")}`);
        } else {
            // Muestra la categoría si no tiene alimentos
            console.log(`${capitalizeFirstLetter(categoria)}:`);
        }
    }
}

// Función para capitalizar la primera letra de una cadena
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Llama a la función para comenzar a gestionar la lista de compras
gestionarLista();
```