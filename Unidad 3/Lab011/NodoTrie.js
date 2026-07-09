class NodoTrie {
    constructor() {
        // Se usa Map para ahorrar memoria (Green Computing)
        this.hijos = new Map();
        this.esFinDePalabra = false;
    }
}

module.exports = NodoTrie;