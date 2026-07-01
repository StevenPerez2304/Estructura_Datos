class Estudiante {
    constructor(codigo, nombre, carrera, semestre, tramite) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.carrera = carrera;
        this.semestre = semestre;
        this.tramite = tramite;
    }
}

class ColaCircular {
    constructor(capacidad) {
        this.capacidad = capacidad;
        this.cola = new Array(capacidad);
        this.frente = 0;
        this.fin = -1;
        this.tamano = 0;
    }

    estaVacia() {
        return this.tamano === 0;
    }

    estaLlena() {
        return this.tamano === this.capacidad;
    }

    registrarEstudiante(estudiante) {
        if (this.estaLlena()) {
            console.log("La cola está llena. No se pueden registrar más estudiantes.\n");
            return;
        }

        this.fin = (this.fin + 1) % this.capacidad;
        this.cola[this.fin] = estudiante;
        this.tamano++;

        console.log(`Estudiante ${estudiante.nombre} registrado correctamente.\n`);
    }

    atenderEstudiante() {
        if (this.estaVacia()) {
            console.log("No existen estudiantes en espera.\n");
            return;
        }

        const estudiante = this.cola[this.frente];
        this.cola[this.frente] = null;
        this.frente = (this.frente + 1) % this.capacidad;
        this.tamano--;

        console.log("=== Estudiante Atendido ===");
        console.log(`Código   : ${estudiante.codigo}`);
        console.log(`Nombre   : ${estudiante.nombre}`);
        console.log(`Carrera  : ${estudiante.carrera}`);
        console.log(`Semestre : ${estudiante.semestre}`);
        console.log(`Trámite  : ${estudiante.tramite}\n`);
    }

    siguienteEstudiante() {
        if (this.estaVacia()) {
            console.log("No hay estudiantes en espera.\n");
            return;
        }

        const estudiante = this.cola[this.frente];

        console.log("=== Siguiente Estudiante ===");
        console.log(`Código   : ${estudiante.codigo}`);
        console.log(`Nombre   : ${estudiante.nombre}`);
        console.log(`Carrera  : ${estudiante.carrera}`);
        console.log(`Semestre : ${estudiante.semestre}`);
        console.log(`Trámite  : ${estudiante.tramite}\n`);
    }

    mostrarCola() {
        if (this.estaVacia()) {
            console.log("La cola está vacía.\n");
            return;
        }

        console.log("===== ESTUDIANTES EN ESPERA =====");

        for (let i = 0; i < this.tamano; i++) {
            let indice = (this.frente + i) % this.capacidad;
            let e = this.cola[indice];

            console.log(
                `${i + 1}. ${e.codigo} - ${e.nombre} | ${e.carrera} | Semestre ${e.semestre} | ${e.tramite}`
            );
        }

        console.log();
    }
}

// ===============================
// PRUEBAS DEL SISTEMA
// ===============================

const sistema = new ColaCircular(5);

sistema.registrarEstudiante(
    new Estudiante("2025001", "Juan Pérez", "Ingeniería", 3, "Matrícula")
);

sistema.registrarEstudiante(
    new Estudiante("2025002", "María López", "Derecho", 5, "Certificado")
);

sistema.registrarEstudiante(
    new Estudiante("2025003", "Carlos Díaz", "Medicina", 2, "Cambio de carrera")
);

sistema.mostrarCola();

sistema.siguienteEstudiante();

sistema.atenderEstudiante();

sistema.mostrarCola();

sistema.registrarEstudiante(
    new Estudiante("2025004", "Ana Torres", "Arquitectura", 4, "Actualización de datos")
);

sistema.registrarEstudiante(
    new Estudiante("2025005", "Pedro Romero", "Contabilidad", 6, "Retiro de materia")
);

sistema.registrarEstudiante(
    new Estudiante("2025006", "Luis Sánchez", "Sistemas", 1, "Matrícula")
);

sistema.mostrarCola();