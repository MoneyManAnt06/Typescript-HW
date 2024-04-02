// Herencia:
// a. Crea una clase base "Animal" con propiedades y métodos como "name" y "eat".
// b. Crea clases hijas como "Dog" y "Cat" que hereden de "Animal" y añadan funcionalidades específicas como "bark" y "purr".
// c. Crea instancias de las clases hijas y prueba sus métodos heredados y propios.

class Mamifero {
    constructor(public nombre: string) {}

    comer(): void{
        console.log("El mamifero esta comiendo")
    }
    
}

class Perro extends Mamifero {
    ladrar (): void {
        console.log("El perro esta ladrando")
    }
}

class Gato extends Mamifero {
    maullar (): void {
        console.log("El gato esta maullando")
    }
}

const myDog = new Perro("Bobby");
myDog.ladrar();

const mycat = new Gato("Bobby");
mycat.maullar();