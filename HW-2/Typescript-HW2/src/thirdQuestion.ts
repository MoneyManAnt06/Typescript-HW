// Extensión de interfaces:
// a. Crea una interfaz base "Employee" con propiedades como "name" y "surname".
// b. Extiende la interfaz "Employee" en dos nuevas interfaces, "Developer" y "Designer", añadiendo propiedades específicas para cada tipo de empleado.
// c. Crea objetos de tipo "Developer" y "Designer" y accede a sus propiedades para verificar la extensión de la interfaz.

interface Employee {
    name: string;
    surname: string;
  }
  
  interface Developer extends Employee {
    language: Array<string>;
  }

  interface Designer extends Employee {
    creativity: boolean;
  }

  const myDeveloper: Developer = {
    name:"Anthony",
    surname: "Lopez",
    language: ["html", "css", "js"]
  }
  
  const myDesigner: Designer = {
    name:"Fernada",
    surname: "Alvarez",
    creativity: true
  }

  console.log(myDeveloper)
  console.log(myDesigner)