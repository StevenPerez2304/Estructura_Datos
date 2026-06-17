/*
Condicionales
*/

// if
let llueve = true;
let haceFrio = true;

if (haceFrio ) {
  console.log("Lleva abrigo"); // Si haceFrio = false, no muestra nada
} else {
  console.log("No hace frío");
  haceFrio = false;
}

// if - else
let edad = 20;

if (edad >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}

// if / else if / else
let nota = 7;

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 7) {
  console.log("Bueno");
} else if (nota >= 5) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

// switch
let dia = 1;

switch (dia) {
  case 1:
    console.log("Lunes"); break;
  case 2:
    console.log("Martes"); break;
  case 3:
    console.log("Miércoles"); break;
  default:
    console.log("Otro día");
}

// Operador ternario ? :
let acceso = (edad >= 18)
  ? "Permitido"
  : "Denegado";

console.log(acceso); // Permitido