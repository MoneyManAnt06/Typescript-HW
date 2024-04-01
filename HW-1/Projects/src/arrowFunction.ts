//Funciones flecha: Convierte una función normal que calcule el cuadrado de un número en una función flecha.

const squared = (num: number): number => {
    return num * num
}

console.log(squared(3))