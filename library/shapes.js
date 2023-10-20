//using constructor to define shape. takes in color function
class Shape {
  constructor() {
    this.colorShape = "";
  }
  setColor(colorShape) {
    this.colorShape = colorShape;
  }
}

//class renders for each shape building off of Shape
class Circle extends Shape {
  render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.colorShape}"/>`;
  }
}

class Square extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.colorShape}"/>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.colorShape}"/>`;
  }
}

//exporting module to be used
module.exports = { Circle, Square, Triangle };
