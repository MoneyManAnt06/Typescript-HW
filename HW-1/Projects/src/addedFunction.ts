// Funciones anidadas: Crea una función externa que reciba un número y devuelva una función 
// interna que multiplique ese número por un valor dado.

const functEx = (num1: number): number => {
    const functInt = (num2: number): number => {
        return num1 * num2
    }
    return functInt(3)
}

console.log(functEx(4))