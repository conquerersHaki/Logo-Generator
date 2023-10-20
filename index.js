// setting up required modules
const SVG = require("./library/svg.js");
const { Circle, Square, Triangle } = require("./library/shapes.js");
const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");

//questions for user input to generate svg logo
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "characters",
        message: "Enter up to 3 characters for your logo.",
        //ensuring there actually are characters entered
        validate: function (input) {
          if (input.length > 3) {
            return "Please only enter between 1 to 3 characters for your logo.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "colorText",
        message: "Please enter a color name for your text.",
      },
      {
        type: "list",
        name: "Shape",
        message: "What shape would you like your logo to be?",
        choices: ["Circle", "Triangle", "Square"],
      },
      {
        type: "input",
        name: "colorShape",
        message: "Please enter a color name for your shape.",
      },
      //taking in the input
    ])
    .then(({ characters, colorText, Shape, colorShape }) => {
      let shapeName;
      switch (Shape) {
        case "Circle":
          shapeName = new Circle();
          break;
        case "Triangle":
          shapeName = new Triangle();
          break;
        case "Square":
          shapeName = new Square();
          break;
      }
      //creating logo
      shapeName.setColor(colorShape);
      const mySVG = new SVG();
      mySVG.setColorText(colorText, characters);
      mySVG.setShape(shapeName);
      return writeFile("logo.svg", mySVG.render());
    })
    .then(() => {
      console.log("All done! Logo generated.");
    })
    .catch((err) => {
      console.log(err);
    });
}

init();

module.exports = {};
