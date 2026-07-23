/**
 * @class AuditoriaRedUrbana
 * @classdesc
 * Gestiona la topología de una red de centros de acopio para realizar
 * auditorías y pruebas de estrés sobre operaciones de registro,
 * consulta y eliminación de paquetes.
 *
 * Utiliza un Map donde la clave representa el identificador del
 * centro de acopio y el valor es un arreglo con los paquetes
 * almacenados en dicho centro.
 */
class AuditoriaRedUrbana {

    /**
     * Inicializa la estructura de datos de la red.
     *
     * Complejidad Temporal: O(1)
     */
    constructor() {
        this.centrosAcopio = new Map();
    }

    /**
     * Registra un nuevo centro de acopio si no existe.
     *
     * @param {number} id Identificador del centro.
     *
     * Complejidad Temporal: O(1)
     */
    registrarCentro(id) {
        if (!this.centrosAcopio.has(id)) {
            this.centrosAcopio.set(id, []);
        }
    }

    /**
     * Agrega un paquete a un centro de acopio.
     *
     * @param {number} idCentro Identificador del centro.
     * @param {string} paquete Nombre del paquete.
     *
     * Complejidad Temporal: O(1)
     */
    registrarPaquete(idCentro, paquete) {
        this.registrarCentro(idCentro);
        this.centrosAcopio.get(idCentro).push(paquete);
    }

    /**
     * Obtiene los paquetes almacenados en un centro.
     *
     * @param {number} idCentro Identificador del centro.
     * @returns {Array<string>} Lista de paquetes del centro.
     *
     * Complejidad Temporal: O(1)
     */
    consultarCentro(idCentro) {
        return this.centrosAcopio.get(idCentro) || [];
    }

    /**
     * Elimina el último paquete registrado en un centro.
     *
     * @param {number} idCentro Identificador del centro.
     *
     * Complejidad Temporal: O(1)
     */
    eliminarPaquete(idCentro) {
        if (
            this.centrosAcopio.has(idCentro) &&
            this.centrosAcopio.get(idCentro).length > 0
        ) {
            this.centrosAcopio.get(idCentro).pop();
        }
    }

    /**
     * Ejecuta una prueba de estrés simulando eventos aleatorios
     * sobre la red de distribución.
     *
     * Cada evento selecciona uniformemente una operación:
     * registrar paquete, consultar centro o eliminar paquete.
     *
     * @param {number} eventos Número de eventos a simular.
     *
     * Complejidad Temporal: O(n),
     * donde n representa la cantidad de eventos simulados.
     */
    pruebaEstres(eventos) {

        console.log("======================================");
        console.log("INICIANDO PRUEBA DE ESTRÉS - UNLD");
        console.log("======================================");

        for (let i = 1; i <= eventos; i++) {

            const operacion = Math.random();
            const idCentro = Math.floor(Math.random() * 100);

            if (operacion < 0.33) {

                this.registrarPaquete(
                    idCentro,
                    `Paquete-Eco-${i}`
                );

            } else if (operacion < 0.66) {

                this.consultarCentro(idCentro);

            } else {

                this.eliminarPaquete(idCentro);

            }
        }

        console.log("======================================");
        console.log("PRUEBA FINALIZADA");
        console.log(`Centros registrados: ${this.centrosAcopio.size}`);

        let totalPaquetes = 0;

        for (const paquetes of this.centrosAcopio.values()) {
            totalPaquetes += paquetes.length;
        }

        console.log(`Paquetes almacenados: ${totalPaquetes}`);
        console.log("======================================");
    }
}

/**
 * Programa principal.
 *
 * Crea una instancia de la auditoría y ejecuta una prueba de
 * estrés con 10 000 eventos simulados.
 */
const auditoria = new AuditoriaRedUrbana();
auditoria.pruebaEstres(10000);