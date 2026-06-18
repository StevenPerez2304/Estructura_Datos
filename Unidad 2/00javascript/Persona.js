class Empleado {
  constructor(nombre, salario) {
    this.nombre = nombre;
    this.salario = salario;
  }

  mostrarDatos() {
    console.log(`${this.nombre} gana $${this.salario}`);
  }
}

class Gerente extends Empleado {
  constructor(nombre, salario, departamento) {
    super(nombre, salario);
    this.departamento = departamento;
  }

  mostrarDatos() {
    console.log(
      `${this.nombre} es gerente de ${this.departamento} y gana $${this.salario}`
    );
  }
}

const empleado = new Empleado("Carlos", 1200);
const gerente = new Gerente("Laura", 2500, "Ventas");

empleado.mostrarDatos();
gerente.mostrarDatos();