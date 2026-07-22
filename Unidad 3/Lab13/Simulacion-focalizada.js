// Implementación del Grafo mediante Listas de Adyacencia en JavaScript

class GrafoInfraestructura {
    constructor() {
        // Lista de adyacencia (Map)
        this.listaAdyacencia = new Map();

        // Almacena el nombre de cada área
        this.nombresAreas = new Map();
    }

    // Agrega un nuevo vértice (área)
    registrarArea(id, nombre) {
        this.nombresAreas.set(id, nombre);

        if (!this.listaAdyacencia.has(id)) {
            this.listaAdyacencia.set(id, []);
        }
    }

    // Agrega una conexión bidireccional entre dos áreas
    agregarRuta(origen, destino, distancia) {
        this.listaAdyacencia.get(origen).push({
            nodo: destino,
            distancia: distancia
        });

        this.listaAdyacencia.get(destino).push({
            nodo: origen,
            distancia: distancia
        });
    }

    // Muestra el mapa de conexiones
    imprimirMapaRutas() {
        for (let [areaId, conexiones] of this.listaAdyacencia) {

            const nombre = this.nombresAreas.get(areaId);

            const rutas = conexiones
                .map(c => `${this.nombresAreas.get(c.nodo)} (${c.distancia} m)`)
                .join(", ");

            console.log(`${nombre} está conectado con: ${rutas}`);
        }
    }
}



// Crear una red simplificada
const redSimple = new GrafoInfraestructura();

// Registrar las áreas
redSimple.registrarArea(0, "Centro de Producción");
redSimple.registrarArea(3, "Almacén");

// Agregar la ruta entre ambas áreas
redSimple.agregarRuta(0, 3, 15); // Producción ↔ Almacén (15 km)

// Mostrar el mapa de rutas
redSimple.imprimirMapaRutas();
