"use strict";

// 2-Write a script to create different shapes (rectangle, square, circle, triangle) (using Es6 classes)

class Polygon {
  constructor(...dimensions) {
    this.dimensions = dimensions;
    this.shape = "Polygon";
  }

  toString() {
    return `${this.shape} dimensions is: ${this.dimensions} ${
      this.calcArea() ? `,and its area is: ${this.calcArea()}` : ""
    }`;
  }

  calcArea() {}
}

// Rectangle
class Rectangle extends Polygon {
  constructor(length, width) {
    super(length, width, length, width);
    this.shape = "Rectangle";
  }

  calcArea() {
    return this.dimensions[0] * this.dimensions[1];
  }
}

// Square
class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.shape = "Square";
  }
}

// Circle
class Circle extends Polygon {
  constructor(radius) {
    super(radius);
    this.shape = "Circle";
  }

  calcArea() {
    return Math.PI * this.dimensions[0] ** 2;
  }
}

// Triangle
class Triangle extends Polygon {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
    this.shape = "Triangle";
  }

  calcArea() {
    const perimeter =
      (this.dimensions[0] + this.dimensions[1] + this.dimensions[2]) / 2;
    return Math.sqrt(
      perimeter *
        (perimeter - this.dimensions[0]) *
        (perimeter - this.dimensions[1]) *
        (perimeter - this.dimensions[2])
    );
  }
}

/*---------- Testing ----------*/

const rectangle = new Rectangle(7, 8);
console.log(rectangle.toString());

const square = new Square(6);
console.log(square.toString());

const circle = new Circle(9);
console.log(circle.toString());

const triangle = new Triangle(4, 5, 7);
console.log(triangle.toString());
