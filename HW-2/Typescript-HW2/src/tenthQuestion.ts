// Abstracción de datos:
// a. Crea una clase abstracta "Shape" con métodos abstractos para calcular el área y el perímetro.
// b. Implementa la clase abstracta en clases concretas como "Circle" y "Rectangle", definiendo cómo se calculan sus áreas y perímetros.
// c. Crea objetos de las clases concretas y llama a los métodos para calcular áreas y perímetros de diferentes figuras.

abstract class Shape {
    abstract area(): number;
    abstract perimeter(): number;
}

class Circle extends Shape{
 constructor (public radius: number) {
    super()
 }

 area(): number {
    return (Math.PI * this.radius**2)
 } 

 perimeter(): number {
    return ( 2 * Math.PI * this.radius)
 }
}

class Rectangle extends Shape{
    constructor (public length: number,public width:number ) {
        super()
     }
    
     area(): number {
        return (this.length * this.width)
     } 
    
     perimeter(): number {
        return ( 2 * (this.length+this.width))
     }
}

const circle = new Circle(5);
console.log("the area of the circle is", (circle.area()).toFixed(2))
console.log("the perimeter of the circle is", (circle.perimeter()).toFixed(2))

const rectangle = new Rectangle(5, 5);
console.log("the area of the rectangle is", rectangle.area())
console.log("the area of the rectangle is", rectangle.perimeter())
  