// Interfaces para funciones:
// a. Crea una interfaz "Calculator" con un método "sum" que acepte dos números y devuelva su suma.
// b. Implementa la interfaz "Calculator" en una función y prueba su funcionamiento llamándola con diferentes números.
// c. Define otra función que acepte un objeto que cumpla con la interfaz "Calculator" y use su método "sum" para realizar una operación.

interface Calculator {
    sum(x: number, y: number): number;
  }
  
  const add: Calculator = {
    sum (x: number, y: number):number{
        return x + y;
    }
  }

  const acceptObject = (objectA: Calculator) => {
    return objectA.sum (5,3)
  }

  console.log(acceptObject(add))
  
  
