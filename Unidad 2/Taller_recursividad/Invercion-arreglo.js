function invertirArreglo(arr, inicio, fin) {
    // Caso Base:
    // Si los índices se cruzan o son iguales, significa que ya
    // se han intercambiado todos los elementos necesarios y
    // el arreglo está completamente invertido.
    if (inicio >= fin) {
        return;
    }

    // Caso Recursivo:
    // 1. Intercambiamos el elemento del inicio con el del final.
    // 2. Llamamos recursivamente a la función acercando ambos
    //    índices hacia el centro del arreglo.
    let temp = arr[inicio];
    arr[inicio] = arr[fin];
    arr[fin] = temp;

    invertirArreglo(arr, inicio + 1, fin - 1);
}

// Casos de prueba para validación
let miLista = [10, 20, 30, 40, 50];
invertirArreglo(miLista, 0, miLista.length - 1);
console.assert(JSON.stringify(miLista) === JSON.stringify([50, 40, 30, 20, 10]));
console.log("Ejercicio 2.1 superado.");