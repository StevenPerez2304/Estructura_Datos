const numeroSecreto = Math.floor(Math.random() * 10 + 1)
const numeroJugador = parseInt(prompt("Adivina el nimero secreto entre el numero 1 al 10: "))

console.log(`Este es el numero con el que juegas ${numeroJugador}`)

if (numeroJugador === numeroSecreto) {
    console.log("Felicidades, has adivinado el numero!!")
} else if (numeroJugador < numeroJugador) {
    console.log("Numero muy bajo... Intenta nuevamente")
} else if (numeroJugador > numeroSecreto) {
    console.log("Numero muy alto... Intenta nuevamente")
} else {
    console.log("Numero no encontrado... Intenta nuevamnete")
}