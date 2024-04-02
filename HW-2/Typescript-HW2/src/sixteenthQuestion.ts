// Componentes reutilizables:
// a. Crea una clase "Button" con propiedades y métodos para representar un botón en una interfaz de usuario.
// b. Utiliza la clase "Button" en múltiples lugares de una aplicación para mostrar botones reutilizables con diferentes estilos y funciones.
// c. Modifica la clase "Button" para agregar nuevas funcionalidades y asegúrate de que los cambios se reflejen en todos los botones utilizados en la aplicación.

class Button {
    constructor(public text: string, public icon: string, public fontWeight: string) {}

    show() {
        console.log(`ButtonText:${this.text}`, `ButtonIcon:${this.icon}`, `ButtonFontWeight:${this.icon}`);
      }
}

const button1 = new Button("login","arrow.png","400")
const button2 = new Button("log out","arrow.png","500")

button1.show()
button2.show()