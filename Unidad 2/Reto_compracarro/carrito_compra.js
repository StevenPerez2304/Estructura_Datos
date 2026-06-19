const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const productos = [
    { id: 1, nombre: "Laptop", precio: 800 },
    { id: 2, nombre: "Mouse", precio: 20 },
    { id: 3, nombre: "Teclado", precio: 50 }
];

let carrito = [];

// Mostrar productos
function mostrarProductos() {
    console.table(productos);
    menu();
}

// Agregar producto (entra al final de la cola)
function agregarProducto() {
    rl.question("Ingrese el ID del producto: ", (id) => {

        const producto = productos.find(p => p.id === Number(id));

        if (!producto) {
            console.log("Producto no encontrado.");
            return menu();
        }

        carrito.push(producto);

        console.log(`"${producto.nombre}" agregado al carrito.`);
        menu();
    });
}

// Ver carrito
function verCarrito() {

    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        console.table(carrito);

        const total = carrito.reduce(
            (suma, item) => suma + item.precio,
            0
        );

        console.log("Total: $" + total);
    }

    menu();
}

// Eliminar siguiendo FIFO
function eliminarProducto() {

    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {

        const eliminado = carrito.shift(); // Elimina el primero

        console.log(
            `Producto eliminado (FIFO): ${eliminado.nombre}`
        );
    }

    menu();
}

// Vaciar carrito
function vaciarCarrito() {
    carrito = [];
    console.log("Carrito vacío.");
    menu();
}

// Menú
function menu() {

    console.log("\n====== CARRITO DE COMPRAS (FIFO) ======");
    console.log("1. Mostrar productos");
    console.log("2. Agregar producto");
    console.log("3. Ver carrito");
    console.log("4. Eliminar primer producto (FIFO)");
    console.log("5. Vaciar carrito");
    console.log("6. Salir");

    rl.question("Seleccione una opción: ", (opcion) => {

        switch (opcion) {

            case "1":
                mostrarProductos();
                break;

            case "2":
                agregarProducto();
                break;

            case "3":
                verCarrito();
                break;

            case "4":
                eliminarProducto();
                break;

            case "5":
                vaciarCarrito();
                break;

            case "6":
                console.log("Bye.");
                rl.close();
                break;

            default:
                console.log("Opción no válida.");
                menu();
        }
    });
}

menu();