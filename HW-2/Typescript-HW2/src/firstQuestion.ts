// Propiedades opcionales:
// a. Crea una interfaz "User" con propiedades obligatorias como "name" y "surname", y una propiedad opcional como "email".
// b. Define una función que acepte un objeto que cumpla con la interfaz "User" y muestre un mensaje personalizado según si el "email" está presente o no.
// c. Crea dos instancias de objetos "User", una con "email" y otra sin "email", y pásalas a la función definida para verificar su comportamiento.

interface User {
    name: string;
    surname: string;
    email?: string;
}

  const printMessage = (user: User) => {
    const message = user.email !== undefined ? `${user.name} has email: ${user.email}` : `${user.name} does not have an email`
    console.log(message)
  }

const person1: User = { name: "Juan", surname: "Lopez" };
const person2: User = { name: "María",surname:"Garcia",  email: "maria@example.com" };

printMessage(person1)
printMessage(person2)
