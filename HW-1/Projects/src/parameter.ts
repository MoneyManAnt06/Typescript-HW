//Tipado de parámetros y retorno: Implementa una función que tome un nombre (cadena) y una edad (número)
//como parámetros y devuelva un objeto con estos datos.

type Person = {
    name: string, 
    age: number
}

const parameter = (person:Person): Person => {
    return person
}

console.log(parameter({name:"Anthony", age:23}))
