const MotorAutocompletado = require("./MotorAutocompletado");

// Crear el motor de autocompletado
const motor = new MotorAutocompletado();

// Diccionario de tipos de paquetes
const diccionario = [
    "paquete_express",
    "postal_nacional",
    "prioritario",
    "estandar",
    "perecedero"
];

// Cargar todos los términos en el Trie
diccionario.forEach(termino => {
    motor.insertarTermino(termino);
});

console.log("======================================");
console.log(" Motor de Autocompletado Inicializado");
console.log("======================================");

// ======================================================
// PRUEBA 1: Llamadas Individuales (Análisis de Precisión)
// ======================================================

console.log("\n--- Búsqueda Manual ---");

console.log("Sugerencias para 'p':");
console.log(motor.obtenerSugerencias("p"));

console.log("\nSugerencias para 'pa':");
console.log(motor.obtenerSugerencias("pa"));

console.log("\nSugerencias para 'pos':");
console.log(motor.obtenerSugerencias("pos"));


// ======================================================
// PRUEBA 2: Bucle Iterativo (Análisis de Escalabilidad)
// ======================================================

const prefijosPrueba = ["p", "pa", "pos", "e", "pe"];

console.log("\n--- Simulación de Bucle de Búsqueda (Carga de Trabajo) ---");

prefijosPrueba.forEach(prefijo => {

    console.time(`Tiempo_Busqueda_${prefijo}`);

    const resultados = motor.obtenerSugerencias(prefijo);

    console.timeEnd(`Tiempo_Busqueda_${prefijo}`);

    console.log(` -> Sugerencias para '${prefijo}':`, resultados);
});