const readline = require('readline')

class ColaBanco {
    constructor() {
        this.turnos = []
    }

    // Agrega un cliente al final de la cola
    tomarTurno(nombre) {
        this.turnos.push(nombre)
        console.log(`Turno asignado a ${nombre}`)
    }

    // Atiende al primer cliente de la cola
    atenderCliente() {
        if (this.turnos.length === 0) {
            console.log('No hay clientes en espera')
            return
        }

        const cliente = this.turnos.shift()
        console.log(`Atendiendo a ${cliente}`)
    }

    // Muestra los clientes pendientes
    mostrarCola() {
        if (this.turnos.length === 0) {
            console.log('No hay clientes en espera')
            return
        }

        console.log('\nClientes en espera:')
        this.turnos.forEach((cliente, indice) => {
            console.log(`${indice + 1}. ${cliente}`)
        })
    }
}

const banco = new ColaBanco()

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function menu() {
    console.log('\n=== BANCO ===')
    console.log('1. Tomar turno')
    console.log('2. Atender cliente')
    console.log('3. Ver cola')
    console.log('4. Salir')

    rl.question('Seleccione una opción: ', opcion => {
        switch (opcion) {
            case '1':
                rl.question('Nombre del cliente: ', nombre => {
                    banco.tomarTurno(nombre)
                    menu()
                })
                break

            case '2':
                banco.atenderCliente()
                menu()
                break

            case '3':
                banco.mostrarCola()
                menu()
                break

            case '4':
                console.log('Sistema finalizado')
                rl.close()
                break

            default:
                console.log('Opción no válida')
                menu()
        }
    })
}

menu()