const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Productos ejemplo
const productos = [
  { id: 1, nombre: "Laptop", precio: 800 },
  { id: 2, nombre: "Mouse", precio: 20 },
  { id: 3, nombre: "Teclado", precio: 50 },
  { id: 4, nombre: "Monitor", precio: 200 },
  { id: 5, nombre: "Impresora", precio: 150 },
  { id: 6, nombre: "Auriculares", precio: 100 }
];

let carrito = [];

// Funciones
function mostrarProductos() {
  console.table(productos);
  menu();
}

function verCarrito() {
  console.table(carrito);
  menu();
}

function agregarProducto() {
  rl.question("Ingrese ID del producto: ", (id) => {
    const producto = productos.find(p => p.id === Number(id));

    if (!producto) {
      console.log("Producto no encontrado");
      return menu();
    }

    carrito.push(producto);
    console.log("Producto agregado");
    menu();
  });
}

function eliminarProducto() {
  rl.question("Ingrese ID a eliminar: ", (id) => {
    carrito = carrito.filter(p => p.id !== Number(id));
    console.log("Producto eliminado");
    menu();
  });
}

function vaciarCarrito() {
  carrito = [];
  console.log("Carrito vacío");
  menu();
}

// Menú principal
function menu() {
  console.log("\n=== CARRITO DE COMPRAS ===");

  rl.question(
    "Seleccione una opción:\n1. Mostrar productos\n2. Agregar producto\n3. Ver carrito\n4. Eliminar producto\n5. Vaciar carrito\n6. Salir\n> ",
    (opcion) => {

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
          console.log("Saliendo...");
          rl.close();
          break;

        default:
          console.log("Opción inválida");
          menu();
      }
    }
  );
}

// Iniciar programa
menu();