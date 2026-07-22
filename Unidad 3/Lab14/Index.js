// ================================
// Clase PriorityQueue
// Gestiona los nodos según el menor peso acumulado
// ================================

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }

    isEmpty() {
        return this.values.length === 0;
    }
}

// ================================
// Clase LogisticaGrafo
// Implementación del algoritmo de Dijkstra
// ================================

class LogisticaGrafo {

    constructor(numNodos) {
        this.numNodos = numNodos;
        this.adyacencia = Array.from(
            { length: numNodos },
            () => []
        );
    }

    agregarRuta(origen, destino, consumoEnergetico) {
        this.adyacencia[origen].push({
            nodo: destino,
            peso: consumoEnergetico
        });
    }

    calcularRutaMinima(origen, destino) {

        const distancias = Array(this.numNodos).fill(Infinity);
        const predecesores = Array(this.numNodos).fill(null);

        const cola = new PriorityQueue();

        distancias[origen] = 0;
        cola.enqueue(origen, 0);

        while (!cola.isEmpty()) {

            const { val: nodoActual, priority: distanciaActual } = cola.dequeue();

            if (nodoActual === destino)
                break;

            if (distanciaActual > distancias[nodoActual])
                continue;

            for (const vecino of this.adyacencia[nodoActual]) {

                const nuevaDistancia =
                    distancias[nodoActual] + vecino.peso;

                if (nuevaDistancia < distancias[vecino.nodo]) {

                    distancias[vecino.nodo] = nuevaDistancia;
                    predecesores[vecino.nodo] = nodoActual;

                    cola.enqueue(vecino.nodo, nuevaDistancia);
                }
            }
        }

        return {
            consumoTotal: distancias[destino],
            ruta: this.reconstruirRuta(predecesores, destino)
        };
    }

    reconstruirRuta(predecesores, destino) {

        const ruta = [];
        let actual = destino;

        while (actual !== null) {
            ruta.unshift(actual);
            actual = predecesores[actual];
        }

        return ruta;
    }

}

// =========================================
// Simulación de una red logística ecológica
// =========================================

const redLogistica = new LogisticaGrafo(5);

// Rutas disponibles
redLogistica.agregarRuta(0, 1, 4);
redLogistica.agregarRuta(0, 2, 2);
redLogistica.agregarRuta(1, 3, 5);
redLogistica.agregarRuta(2, 1, 1);
redLogistica.agregarRuta(2, 4, 8);
redLogistica.agregarRuta(3, 4, 3);

// Calcular la mejor ruta
const resultado = redLogistica.calcularRutaMinima(0, 4);

// Mostrar resultados
console.log("====== LOGÍSTICA VERDE ======");
console.log("Ruta optimizada:", resultado.ruta.join(" -> "));
console.log("Consumo energético:", resultado.consumoTotal + " kWh");