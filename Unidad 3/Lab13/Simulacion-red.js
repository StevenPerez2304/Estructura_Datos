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



// Crear la red de infraestructura
const red = new GrafoInfraestructura();

// Registrar los centros de la red
const centros = [
    "Centro de Producción",
    "Centro de Acopio",
    "Centro de Distribución",
    "Almacén",
    "Punto de Entrega"
];

centros.forEach((nombre, i) => {
    red.registrarArea(i, nombre);
});

// Configurar las rutas de distribución
red.agregarRuta(0, 3, 15); // Producción ↔ Almacén
red.agregarRuta(0, 1, 30); // Producción ↔ Acopio
red.agregarRuta(1, 2, 10); // Acopio ↔ Distribución
red.agregarRuta(4, 2, 20); // Punto de Entrega ↔ Distribución
red.agregarRuta(3, 4, 25); // Almacén ↔ Punto de Entrega

// Mostrar la red completa
red.imprimirMapaRutas();

