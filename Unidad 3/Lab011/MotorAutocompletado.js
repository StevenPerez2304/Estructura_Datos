const NodoTrie = require("./NodoTrie");

class MotorAutocompletado {
    constructor() {
        this.raiz = new NodoTrie();
    }

    // Inserta una palabra en el Trie
    insertarTermino(termino) {
        let actual = this.raiz;
        const palabra = termino.toLowerCase();

        for (const char of palabra) {
            if (!actual.hijos.has(char)) {
                actual.hijos.set(char, new NodoTrie());
            }

            actual = actual.hijos.get(char);
        }

        actual.esFinDePalabra = true;
    }

    // Busca el nodo correspondiente a un prefijo
    buscarNodoPrefijo(prefijo) {
        let actual = this.raiz;
        const palabra = prefijo.toLowerCase();

        for (const char of palabra) {
            if (!actual.hijos.has(char)) {
                return null;
            }

            actual = actual.hijos.get(char);
        }

        return actual;
    }

    // Devuelve todas las palabras que comienzan con el prefijo
    obtenerSugerencias(prefijo) {
        const resultados = [];
        const nodoInicial = this.buscarNodoPrefijo(prefijo);

        if (nodoInicial) {
            this.dfsExtraerPalabras(
                nodoInicial,
                prefijo.toLowerCase(),
                resultados
            );
        }

        return resultados;
    }

    // Recorrido DFS para obtener todas las palabras
    dfsExtraerPalabras(nodo, palabraActual, resultados) {
        if (nodo.esFinDePalabra) {
            resultados.push(palabraActual);
        }

        for (const [char, hijo] of nodo.hijos) {
            this.dfsExtraerPalabras(
                hijo,
                palabraActual + char,
                resultados
            );
        }
    }
}

module.exports = MotorAutocompletado;