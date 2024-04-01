//Tipado de parámetros y retorno: Implementa una función que tome un nombre (cadena) y una edad (número)
//como parámetros y devuelva un objeto con estos datos.

const parameter = (name: string, age: number): object => {
    return {name, age}
}

console.log(parameter("Anthony", 23))