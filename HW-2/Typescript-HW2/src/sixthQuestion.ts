// Interfaces indexables:
// a. Crea una interfaz "Dictionary" que permita acceder a sus elementos mediante claves de tipo string y devuelva valores de tipo string.
// b. Implementa la interfaz "Dictionary" en una clase y agrega métodos para añadir elementos, obtener un elemento por clave y mostrar todos los elementos del diccionario.
// c. Crea una instancia del diccionario, añade elementos y prueba los métodos de acceso y visualización.


interface Dictionary {
    [key: string]: string;
  }
  
  class Text2 {
    values: Dictionary;
    constructor(){
        this.values = {}
    }

    set(value:string) {
        this.values = {...this.values, [value]: value}
    }

    get(key:string){
       console.log(this.values[key])
    }

    getall(){
        console.log(this.values)
    }
  }

  const dictionary = new Text2()
  dictionary.set("hello world")
  dictionary.set("cool world")
  dictionary.set("goodbye world")
  dictionary.get("hello world")
  dictionary.getall()
