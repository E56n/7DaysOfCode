# DayOne

**Reto:** Reescribe el código para comparar correctamente valores y tipos entre números y cadenas. El reto consiste en usar los operadores de comparación (==, ===) para imprimir si las variables tienen el mismo valor o tipo, y cómo la conversión implícita de tipos afecta los resultados.

# Comparaciones en JavaScript

Este proyecto demuestra cómo JavaScript maneja la comparación entre diferentes tipos de variables, específicamente números y cadenas de texto. A través de varias comparaciones, se exploran las diferencias entre los operadores de igualdad (`==` y `===`) y cómo la conversión implícita de tipos afecta los resultados.

# Codigo Original

## Comparación de Variables en JavaScript

El siguiente código compara diferentes tipos de variables en JavaScript para ilustrar cómo la conversión implícita de tipos y los operadores de comparación afectan los resultados.

```javascript
let numeroUn = 1;
let stringUn = '1';
let numeroTreinta = 30;
let stringTreinta = '30';
let numeroDiez = 10;
let stringDiez = '10';

// Comparar numeroUn y stringUn
if (COMPARAR numeroUn y stringUn) {
  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
} else {
  console.log('Las variables numeroUn y stringUn no tienen el mismo valor');
}

// Comparar numeroTreinta y stringTreinta
if (COMPARAR numeroTreinta y stringTreinta) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
} else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
}

// Comparar numeroDiez y stringDiez
if (COMPARAR numeroDiez y stringDiez) {
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
} else {
  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor');
}
```

## Funcionalidad

El código realiza las siguientes comparaciones:

1. **Comparación entre número y cadena (con `==` y `===`)**: 
   - Compara un número con una cadena que representa el mismo valor numérico, verificando cómo el operador de igualdad (`==`) permite la conversión implícita de tipos, mientras que el operador de igualdad estricta (`===`) considera tanto el valor como el tipo.

2. **Comparación entre números y cadenas con valores diferentes (con `==` y `===`)**:
   - Analiza cómo se comparan números y cadenas con valores numéricos distintos usando los operadores de igualdad y estricta.

3. **Comparaciones adicionales sin conversión explícita (`parseInt()`)**:
   - Realiza comparaciones entre variables numéricas y de cadena sin utilizar `parseInt()`, para observar cómo los operadores de igualdad manejan la conversión implícita de tipos y cómo afecta a los resultados de las comparaciones.

El código también incluye casos de comparación entre diferentes tipos de variables (números y cadenas) para ilustrar cómo los operadores de comparación en JavaScript pueden resultar en diferentes resultados dependiendo del tipo de comparación utilizada y si se realiza una conversión implícita o explícita de tipos.

## Propósito

El objetivo es entender mejor las diferencias entre la comparación de igualdad y la comparación estricta, y cómo la conversión implícita de tipos puede influir en los resultados de las comparaciones en JavaScript.

Este código es útil para aprender cómo manejar y evitar problemas comunes relacionados con la comparación de tipos en JavaScript, mejorando así la precisión y confiabilidad del código al trabajar con diferentes tipos de datos.

## Autor

**Eder Said Martinez Ramirez**