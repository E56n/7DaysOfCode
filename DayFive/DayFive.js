// Objeto que almacenará las categorías y los alimentos en cada una
let listaDeCompras = {
    frutas: [],
    lacteos: [],
    congelados: [],
    dulces: []
};

// Función para agregar alimentos a la lista de compras
function agregarAlimento() {
    // Pregunta al usuario si desea agregar un alimento
    let agregar = prompt("¿Deseas agregar un alimento a tu lista de compras? (sí/no)");
    
    // Bucle que continúa ejecutándose mientras la respuesta sea "sí"
    while (agregar.toLowerCase() === 'sí') {
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
        
        // Pregunta nuevamente si el usuario desea agregar otro alimento
        agregar = prompt("¿Deseas agregar otro alimento? (sí/no)");
    }
    
    // Muestra la lista de compras organizada por categorías
    mostrarListaDeCompras();
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

// Llama a la función para comenzar a agregar alimentos
agregarAlimento();
