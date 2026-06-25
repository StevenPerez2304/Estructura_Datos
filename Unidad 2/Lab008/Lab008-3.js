class RegistroAmbiental {
    constructor(idRegistro, especie, toneladasCO2) {
        this.idRegistro = idRegistro;
        this.especie = especie;
        this.toneladasCO2 = toneladasCO2;
    }
}

class GestorRegistrosVerdes {

    // Merge Sort
    mergeSort(arreglo, inicio, fin) {
        if (inicio < fin) {

            let medio = Math.floor(inicio + (fin - inicio) / 2);

            this.mergeSort(arreglo, inicio, medio);
            this.mergeSort(arreglo, medio + 1, fin);

            this.merge(arreglo, inicio, medio, fin);
        }
    }

    // Mezcla de subarreglos ordenados
    merge(arreglo, inicio, medio, fin) {

        let izquierda = arreglo.slice(inicio, medio + 1);
        let derecha = arreglo.slice(medio + 1, fin + 1);

        let i = 0;
        let j = 0;
        let k = inicio;

        while (i < izquierda.length && j < derecha.length) {

            if (izquierda[i].idRegistro <= derecha[j].idRegistro) {
                arreglo[k] = izquierda[i];
                i++;
            } else {
                arreglo[k] = derecha[j];
                j++;
            }

            k++;
        }

        while (i < izquierda.length) {
            arreglo[k] = izquierda[i];
            i++;
            k++;
        }

        while (j < derecha.length) {
            arreglo[k] = derecha[j];
            j++;
            k++;
        }
    }

    // Búsqueda Secuencial
    busquedaSecuencial(arreglo, idBuscado) {

        for (let i = 0; i < arreglo.length; i++) {

            if (arreglo[i].idRegistro === idBuscado) {
                return i;
            }
        }

        return -1;
    }

    // Búsqueda Binaria
    busquedaBinaria(arreglo, idBuscado) {

        let inicio = 0;
        let fin = arreglo.length - 1;

        while (inicio <= fin) {

            let medio = Math.floor((inicio + fin) / 2);

            if (arreglo[medio].idRegistro === idBuscado) {
                return medio;
            }

            if (arreglo[medio].idRegistro < idBuscado) {
                inicio = medio + 1;
            } else {
                fin = medio - 1;
            }
        }

        return -1;
    }
}

// Generar registros (IDs desde 0)
function generarRegistros(cantidad) {

    let registros = [];

    for (let i = 0; i < cantidad; i++) {

        registros.push(
            new RegistroAmbiental(
                i,
                `Especie_${i}`,
                Number((Math.random() * 100).toFixed(2))
            )
        );
    }

    return registros;
}

// Algoritmo Fisher-Yates
function fisherYates(arreglo) {

    for (let i = arreglo.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i + 1));

        [arreglo[i], arreglo[j]] = [arreglo[j], arreglo[i]];
    }
}

// Escenario de prueba
function ejecutarPrueba(cantidad) {

    console.log("\n====================================");
    console.log(`Prueba con ${cantidad} registros`);
    console.log("====================================");

    const gestor = new GestorRegistrosVerdes();

    // Generar registros
    let registros = generarRegistros(cantidad);

    // Desordenar el arreglo
    fisherYates(registros);

    // Último ID del arreglo
    const idBuscado = cantidad - 1;

    // -----------------------------
    // Búsqueda Secuencial
    // (sobre arreglo desordenado)
    // -----------------------------
    const inicioTiempo = performance.now();

    const indiceSecuencial = gestor.busquedaSecuencial(
        registros,
        idBuscado
    );

    const finTiempo = performance.now();

    const tiempoTotalMs = finTiempo - inicioTiempo;

    console.log(`Búsqueda finalizada. Índice encontrado: ${indiceSecuencial}`);
    console.log(`Tiempo de ejecución: ${tiempoTotalMs.toFixed(4)} milisegundos`);

    // -----------------------------
    // Ordenamiento Merge Sort
    // -----------------------------
    console.time("Merge Sort");
    gestor.mergeSort(registros, 0, registros.length - 1);
    console.timeEnd("Merge Sort");

    // -----------------------------
    // Búsqueda Binaria
    // -----------------------------
    console.time("Busqueda Binaria");
    const indiceBinaria = gestor.busquedaBinaria(
        registros,
        idBuscado
    );
    console.timeEnd("Busqueda Binaria");

    console.log("Índice Binaria:", indiceBinaria);
}

// Ejecutar pruebas
ejecutarPrueba(25000);
ejecutarPrueba(500000);
ejecutarPrueba(1000000);