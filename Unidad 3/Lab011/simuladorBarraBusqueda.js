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

console.log("Diccionario de paquetería cargado exitosamente.");

console.log("\nBúsqueda de sugerencias:");

console.log("Prefijo 'pa':");
console.log(motor.obtenerSugerencias("pa"));

console.log("\nPrefijo 'po':");
console.log(motor.obtenerSugerencias("po"));

console.log("\nPrefijo 'pr':");
console.log(motor.obtenerSugerencias("pr"));

console.log("\nPrefijo 'es':");
console.log(motor.obtenerSugerencias("es"));

console.log("\nPrefijo 'pe':");
console.log(motor.obtenerSugerencias("pe"));