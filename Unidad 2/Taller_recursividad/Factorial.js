function factorialCola(n, acumulador = 1) {
    // Caso Base:
    // Si n es 0 o 1, el resultado ya está acumulado
    // y se puede devolver directamente.
    if (n <= 1) {
        return acumulador;
    }

    // Caso Recursivo (de cola):
    // Multiplicamos el acumulador por n y reducimos n.
    // La llamada recursiva es la última operación.
    return factorialCola(n - 1, acumulador * n);
}

// Pruebas
console.assert(factorialCola(5) === 120, "Error en factorialCola(5)");
console.assert(factorialCola(0) === 1, "Error en factorialCola(0)");
console.log("Factorial de cola correcto.");