class NodoArbol {
    constructor(valor) {
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}

function recorridoInorden(raiz) {
    // Caso Base:
    // Si el nodo actual es nulo, significa que no hay más
    // nodos por recorrer en esa rama, por lo que devolvemos
    // un arreglo vacío.
    if (raiz === null) {
        return [];
    }

    // Caso Recursivo:
    // 1. Recorrer el subárbol izquierdo.
    // 2. Visitar la raíz.
    // 3. Recorrer el subárbol derecho.
    return [
        ...recorridoInorden(raiz.izquierdo),
        raiz.valor,
        ...recorridoInorden(raiz.derecho)
    ];
}

function recorridoPreorden(raiz) {
    // Caso Base:
    // Si el nodo actual es nulo, no hay elementos que recorrer.
    if (raiz === null) {
        return [];
    }

    // Caso Recursivo:
    // 1. Visitar la raíz.
    // 2. Recorrer el subárbol izquierdo.
    // 3. Recorrer el subárbol derecho.
    return [
        raiz.valor,
        ...recorridoPreorden(raiz.izquierdo),
        ...recorridoPreorden(raiz.derecho)
    ];
}

function recorridoPostorden(raiz) {
    // Caso Base:
    // Si el nodo actual es nulo, la rama terminó.
    if (raiz === null) {
        return [];
    }

    // Caso Recursivo:
    // 1. Recorrer el subárbol izquierdo.
    // 2. Recorrer el subárbol derecho.
    // 3. Visitar la raíz.
    return [
        ...recorridoPostorden(raiz.izquierdo),
        ...recorridoPostorden(raiz.derecho),
        raiz.valor
    ];
}

// Crear el árbol:
//
//        1
//      /   \
//     2     3
//    / \   /
//   4   5 6

let raiz = new NodoArbol(1);
raiz.izquierdo = new NodoArbol(2);
raiz.derecho = new NodoArbol(3);
raiz.izquierdo.izquierdo = new NodoArbol(4);
raiz.izquierdo.derecho = new NodoArbol(5);
raiz.derecho.izquierdo = new NodoArbol(6);

console.assert(
    JSON.stringify(recorridoPreorden(raiz)) === JSON.stringify([1, 2, 4, 5, 3, 6]),
    "Error en Preorden"
);

console.assert(
    JSON.stringify(recorridoInorden(raiz)) === JSON.stringify([4, 2, 5, 1, 6, 3]),
    "Error en Inorden"
);

console.assert(
    JSON.stringify(recorridoPostorden(raiz)) === JSON.stringify([4, 5, 2, 6, 3, 1]),
    "Error en Postorden"
);

console.log("Ejercicio 3.1 superado.");