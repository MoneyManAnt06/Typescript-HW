// Interfaces genéricas:
// a. Crea una interfaz genérica "Container" que pueda contener un tipo de dato específico.
// b. Implementa la interfaz "Container" en una clase y agrega métodos para añadir elementos, obtener un elemento por índice y mostrar todos los elementos.
// c. Crea instancias del contenedor para diferentes tipos de datos (números, strings, objetos) y prueba los métodos de la clase.

interface IContainer<T> {
    values: T;
  }
  
  class Box implements IContainer<string[]> {
    values: string[] = [];

    addElements(value: string) {
      this.values = [...this.values, value]
    }

    obtainElement(index: number) {
      console.log(this.values[index])
    }

    allElement() {
      console.log(this.values)
    }
  }


const box = new Box()
box.addElements("Trapito")
box.addElements("Anthony")
box.addElements("Kenley")
box.addElements("Harrisong")
box.obtainElement(3)
box.allElement()
