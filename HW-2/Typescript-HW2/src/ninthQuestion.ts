// Modelado de objetos:
// a. Crea una clase "Car" con propiedades como "brand", "model" y "price".
// b. Define métodos para mostrar información detallada del coche y calcular el precio de venta con impuestos.
// c. Crea instancias de la clase "Car" y utiliza sus métodos para obtener información y precios de diferentes modelos.

class Car {
    constructor(public brand: string, public model: string, public price: number){}

    getCarDetails(): string{
        return(`This is a ${this.brand},${this.model}, that cost approximately ${this.price}`)
    }

    getPrice(): number{
        const sum = this.price * .15
        const total = this.price + sum
        return total
    }

}

const carInfo = new Car ("Honda", "CRV", 30000 )


console.log(carInfo.getCarDetails())
console.log(carInfo.getPrice())