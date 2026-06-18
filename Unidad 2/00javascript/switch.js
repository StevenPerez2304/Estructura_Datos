let expr = "pera"

switch (expr) {
  case "mangos":
    console.log("los mangos x5 cuestan $1")
    break;
  case "naranjas":
    //codigo
    console.log("las naranjas x5 cuestan $1")
    break;
  case "manzanas":
    console.log("las manzanas x5 cuestan $1")
    break;
  default:
    console.log(`Lo siento, no tenemos ${expr}`)
    break;
}

console.log("¿Desea comprar algo más?") 