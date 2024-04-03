// Descripción:
// Crea una clase genérica DataStore<T> que funcione como un almacén de datos genéricos. 
// Implementa métodos para agregar (addItem), obtener (getItem) y eliminar (removeItem) elementos del almacén.
// Tareas:

// Define la clase DataStore<T> con un método para agregar elementos de tipo T.
// Implementa un método para obtener un elemento dado su índice.
// Añade un método para eliminar un elemento del almacén.

class DataStore<T>{
    values: T[] = [];

      addItem (value: T) {
        this.values.push(value)
      }

      getItem (index: number) {
        return this.values[index]
      }

      removeItem (index: number) {
        this.values = this.values.filter((value, i) => {
            return index === i;
        })
      }
}

const dataSource = new DataStore<number>();

dataSource.addItem(3)
dataSource.addItem(4)
dataSource.addItem(5)
console.log(dataSource.getItem(2))
dataSource.removeItem(1)

