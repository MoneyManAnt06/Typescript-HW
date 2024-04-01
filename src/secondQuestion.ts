// Definición de contratos para clases:
// a. Crea una interfaz "Animal" con métodos como "eat" y "sleep".
// b. Implementa la interfaz "Animal" en clases como "Dog" y "Cat", definiendo cómo se comportan los métodos en cada caso.
// c. Crea instancias de "Dog" y "Cat" y llama a sus métodos para verificar que cumplan con el contrato de la interfaz.

interface Animal {
    eat(): void;
    sleep(): void;
}
 
class Dog implements Animal {
    eat(): void {
        console.log("the dog is eating");
    }
    sleep(): void {
        console.log("the dog has slept")
    }
}  

class Cat implements Animal {
    eat(): void {
        console.log("the cat was eating");
    }
    sleep(): void {
        console.log("the cat is sleeping");
    }
}  

const dog = new Dog();
const cat = new Cat();

dog.eat();

cat.sleep();

