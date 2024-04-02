// Composición:
// a. Crea una clase "Engine" con métodos como "start" y "stop".
// b. Utiliza la clase "Engine" como una propiedad de la clase "Car" para representar el motor del coche.
// c. Crea un objeto "Car" con un motor específico y llama a sus métodos para controlar el funcionamiento del coche

class Engine {
    start() {
        console.log("The engine has started")
    }

    stop() {
        console.log("The engine has stopped")
    }
}

class SecondCar extends Engine {}

const car = new SecondCar()
car.start()
car.stop()