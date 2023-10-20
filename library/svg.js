//creating class to create the logo itself

class SVG {
  constructor() {
    this.textEl = "";
    this.shapeEl = "";
  }
  render() {
    //specifying dimensions and ver
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`;
  }
  setColorText(colorText, message) {
    if (message.length > 3) {
      throw new Error("Please do not enter more than three characters");
    }
    //building text
    this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${colorText}">${message}</text>`;
  }
  //building shape
  setShape(Shape) {
    this.shapeEl = Shape.render();
  }
}

module.exports = SVG;
