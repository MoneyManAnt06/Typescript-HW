// Interfaces con propiedades de solo lectura:
// a. Crea una interfaz "Book" con propiedades de solo lectura como "title" y "author".
// b. Define una función que acepte un objeto que cumpla con la interfaz "Book" y lo muestre por consola.
// c. Intenta modificar las propiedades de solo lectura de un objeto "Book" después de su creación para verificar que sean inmutables.

interface Book {
    readonly title: string;
    readonly author: string;
  }

  const objectBook = {
    title: "Fuck typescript",
    author: "Anthony Lopez"
  }

 const showBookinfo = (objectParam: Book) => {
    // objectParam.title = "I Love Typescript" //compile error
    console.log(objectParam)
 }

 showBookinfo(objectBook)