class Shape {
  area(): number {
    return 0
  }
}

class Circle {
  radius: number
  constructor(radius: number) {
    this.radius = radius
  }
  area(): number {
    return Math.PI * this.radius ** 2
  }
}

const shape: Shape = new Circle(5)
console.log(shape.area())
