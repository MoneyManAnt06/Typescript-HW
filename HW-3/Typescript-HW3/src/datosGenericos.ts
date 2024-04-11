// Descripción:
// Crea una clase genérica DataStore<T> que funcione como un almacén de datos genéricos.
// Implementa métodos para agregar (addItem), obtener (getItem) y eliminar (removeItem) elementos del almacén.
// Tareas:

// Define la clase DataStore<T> con un método para agregar elementos de tipo T.
// Implementa un método para obtener un elemento dado su índice.
// Añade un método para eliminar un elemento del almacén.

interface Product {
  item: string;
  inventory: number;
}

class DataStore<T extends string | number | Product> {
  values: T[] = [];

  addItem(value: T) {
    this.values.push(value);
  }

  getItem(index: number) {
    return this.values[index];
  }

  removeItem(index: number) {
    this.values = this.values.filter((value, i) => {
      return index === i;
    });
  }
}

// The number instance
const dataSource = new DataStore<number>();

dataSource.addItem(3);
dataSource.addItem(4);
dataSource.addItem(5);
console.log(dataSource.getItem(2));
dataSource.removeItem(1);

//The string instance
const stringDataSource = new DataStore<string>();
stringDataSource.addItem('sdsffasdf');
stringDataSource.addItem('sdsffasdf');
stringDataSource.addItem('sdsffasdf');
console.log(stringDataSource.getItem(2));
stringDataSource.removeItem(1);

//The object instance
const objectDataSource = new DataStore<Product>();

objectDataSource.addItem({ inventory: 1, item: 'dildo' });
objectDataSource.addItem({ inventory: 3, item: 'lube' });
objectDataSource.addItem({ inventory: 5, item: 'vibrator' });
console.log(objectDataSource.getItem(2));
objectDataSource.removeItem(1);
