function sumaDigitos(n) {
    // Caso Base:
    // Si el número tiene un solo dígito (0 a 9),
    // ese mismo número es la suma de sus dígitos.
    if (n < 10) {
        return n;
    }

    // Caso Recursivo:
    // 1. Obtenemos el último dígito con n % 10.
    // 2. Eliminamos el último dígito usando Math.floor(n / 10).
    // 3. Sumamos el último dígito con el resultado de llamar
    //    recursivamente a la función con el resto del número.
    return (n % 10) + sumaDigitos(Math.floor(n / 10));
}

// Casos de prueba para validación
console.assert(sumaDigitos(1243) === 10, "Error en sumaDigitos(1243)");
console.assert(sumaDigitos(0) === 0, "Error en sumaDigitos(0)");
console.assert(sumaDigitos(9) === 9, "Error en sumaDigitos(9)");
console.log("Ejercicio 1.1 superado.");