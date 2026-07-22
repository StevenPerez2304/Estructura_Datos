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


const infraestructura = new GrafoInfraestructura();

// Registrar áreas
infraestructura.registrarArea(1, "Edificio Administrativo");
infraestructura.registrarArea(2, "Biblioteca");
infraestructura.registrarArea(3, "Laboratorio de Informática");
infraestructura.registrarArea(4, "Cafetería");
infraestructura.registrarArea(5, "Parqueadero");

// Agregar rutas (grafo no dirigido)
infraestructura.agregarRuta(1, 2, 80);
infraestructura.agregarRuta(1, 3, 120);
infraestructura.agregarRuta(2, 4, 60);
infraestructura.agregarRuta(3, 4, 45);
infraestructura.agregarRuta(4, 5, 90);

// Mostrar el mapa
infraestructura.imprimirMapaRutas();