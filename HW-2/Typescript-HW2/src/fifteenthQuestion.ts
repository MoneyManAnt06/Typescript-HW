// Patrones de diseño:
// a. Implementa el patrón Singleton en una clase "Logger" para gestionar registros de eventos de forma única.
// b. Utiliza el patrón Factory Method para crear instancias de diferentes tipos de vehículos en una fábrica de vehículos.
// c. Aplica el patrón Observer para notificar a diferentes clases cuando se produzca un cambio en un objeto de datos.

class Logger {
    private static instance: Logger;

static getInstance(): Logger {
    if (!Logger.instance) {
        Logger.instance = new Logger();
    }
    return Logger.instance;
}

}


interface Vehicle {
    
    operation(): string
}

class Auto implements Vehicle{
 operation(): string {
     return "creating a auto"
 }
}

class Moto implements Vehicle{
 operation(): string {
    return "creating a moto"
 } 
}

class Camion implements Vehicle{
operation(): string {
    return "creating a camion"
}
}
class Factory {
    createVehicle(type: string): Vehicle {
        {
      if (type === "Auto") {
        return new Auto();
      } else if (type === "Moto") {
        return new Moto();
      } else if (type === "Camion") {
        return new Camion();
      } 
      else {
        throw new Error("Invalid product type");
      }
    }
  }
}
  
const factory = new Factory();
const auto = factory.createVehicle("Auto")
console.log(auto.operation())
const moto = factory.createVehicle("Moto")
console.log(moto.operation())
const camion = factory.createVehicle("Camion")
console.log(camion.operation())