class NodoBusqueda {
    constructor(keyword, urlCache) {
        this.keyword = keyword;
        this.urlCache = urlCache;
        this.visitas = 1;
        this.izquierda = null;
        this.derecha = null;
    }
}

class MotorIndexacionBST {
    constructor() {
        this.raiz = null;
    }

    // Indexar nueva consulta
    indexar(keyword, urlCache) {
        const nuevoNodo = new NodoBusqueda(keyword, urlCache);

        if (this.raiz === null) {
            this.raiz = nuevoNodo;
        } else {
            this.insertarNodo(this.raiz, nuevoNodo);
        }
    }

    // Insertar nodo utilizando comparación alfabética
    insertarNodo(nodoActual, nuevoNodo) {

        const comparacion = nuevoNodo.keyword.localeCompare(nodoActual.keyword);

        if (comparacion === 0) {
            // La palabra ya existe
            nodoActual.visitas++;
            return;
        }

        if (comparacion < 0) {
            // Va a la izquierda
            if (nodoActual.izquierda === null) {
                nodoActual.izquierda = nuevoNodo;
            } else {
                this.insertarNodo(nodoActual.izquierda, nuevoNodo);
            }
        } else {
            // Va a la derecha
            if (nodoActual.derecha === null) {
                nodoActual.derecha = nuevoNodo;
            } else {
                this.insertarNodo(nodoActual.derecha, nuevoNodo);
            }
        }
    }

    // Buscar una palabra clave en el historial
    buscar(keyword) {
        let actual = this.raiz;

        while (actual !== null) {

            const comparacion = keyword.localeCompare(actual.keyword);

            if (comparacion === 0) {
                return actual;
            }

            if (comparacion < 0) {
                actual = actual.izquierda;
            } else {
                actual = actual.derecha;
            }
        }

        return null;
    }

    // Exportar historial ordenado alfabéticamente (Inorden)
    exportarHistorial(nodo = this.raiz) {

        if (nodo === null) {
            return;
        }

        this.exportarHistorial(nodo.izquierda);

        console.log(
            `Keyword: ${nodo.keyword} | URL: ${nodo.urlCache} | Visitas: ${nodo.visitas}`
        );

        this.exportarHistorial(nodo.derecha);
    }
}
