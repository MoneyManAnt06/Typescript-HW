// Interfaces genéricas:
// a. Crea una interfaz genérica "Container" que pueda contener un tipo de dato específico.
// b. Implementa la interfaz "Container" en una clase y agrega métodos para añadir elementos, obtener un elemento por índice y mostrar todos los elementos.
// c. Crea instancias del contenedor para diferentes tipos de datos (números, strings, objetos) y prueba los métodos de la clase.

interface Box<T> {
    value: T;
  }
  