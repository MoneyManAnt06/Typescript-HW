// Polimorfismo:
// a. Define una interfaz "Employee" con un método "work" que acepte un parámetro de tipo "Task".
// b. Implementa la interfaz en clases como "Developer" y "Designer", cada una realizando tareas específicas en su método "work".
// c. Crea objetos de las clases y pásalos como parámetros a la función "work" para demostrar el polimorfismo.

interface SecondEmployee {
    work (task:string): void
}
class SecondDeveloper implements SecondEmployee {
    work(task: string): void {
        console.log("The developer is programming the task:", task ) 
    }
}

class SecondDesigner implements SecondEmployee {
    work(task: string): void {
        console.log("The designer is doing the task:", task ) 
    }
}

const developer = new SecondDeveloper();
developer.work("Make Page")

const designer = new SecondDesigner();
designer.work("Design New Page")
