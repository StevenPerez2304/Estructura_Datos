function busquedaBinariaRecursiva(arr, objetivo, bajo, alto) {
    // Caso Base 1:
    // Si el índice inferior supera al superior, significa que
    // el rango de búsqueda es inválido y el elemento no existe
    // en el arreglo.
    if (bajo > alto) {
        return -1;
    }

    // Calculamos el punto medio del rango actual.
    // Math.floor() asegura que el resultado sea un número entero.
    let medio = Math.floor((bajo + alto) / 2);

    // Caso Base 2:
    // Si el elemento ubicado en la posición media es el objetivo,
    // devolvemos su índice.
    if (arr[medio] === objetivo) {
        return medio;
    }

    // Caso Recursivo:
    // Si el objetivo es menor que el elemento del medio,
    // continuamos buscando únicamente en la mitad izquierda.
    if (objetivo < arr[medio]) {
        return busquedaBinariaRecursiva(arr, objetivo, bajo, medio - 1);
    }

    // Si el objetivo es mayor que el elemento del medio,
    // continuamos buscando únicamente en la mitad derecha.
    return busquedaBinariaRecursiva(arr, objetivo, medio + 1, alto);
}

// Casos de prueba para validación
const datosOrdenados = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.assert(busquedaBinariaRecursiva(datosOrdenados, 23, 0, 9) === 5);
console.assert(busquedaBinariaRecursiva(datosOrdenados, 100, 0, 9) === -1);
console.log("Ejercicio 2.2 superado.");