// Interfaces para tipos híbridos:
// a. Crea una interfaz "AdminUser" que combine propiedades de un usuario regular como "name" y "email" con propiedades de un administrador como "permissions" y "role".
// b. Define funciones que acepten objetos que cumplan con la interfaz "AdminUser" y muestren información combinada de usuario y administrador.
// c. Crea instancias de objetos que cumplan con la interfaz "AdminUser" y pasa los objetos a las funciones definidas para comprobar su comportamiento.

interface User2 {
    name: string;
    email2: string;
}
  
interface AdminUser extends User2 {
    permissions: string;
    role: string ;
}

const information = (info: AdminUser) => {
    console.log(info)
}

const adminUser: AdminUser =     
{
    email2:"anthony.lopez@gmail.com", 
    name: "Anthony", 
    permissions: "login", 
    role: "Tilin"
}

information(adminUser)
