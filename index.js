// setting up required modules
const svg = require("./lib/svg");
const { circle, square, triangle } = require("./lib/shapes");
const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");

//questions for user input to generate svg logo
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "characters",
        message: "Enter up to 3 characters",
        //ensuring there actually are characters entered
        validate: function (input) {
          if (input.length > 3) {
            return "Please only enter between 1 to 3 characters.";
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
        name: "shape",
        message: "What shape would you like your logo to be?",
        choices: ["circle", "triangle", "square"],
      },
      {
        type: "input",
        name: "colorShape",
        message: "Please enter a color name for your shape.",
      },
      //taking in the input
    ])
    .then(({ characters, colorText, shape, colorShape }) => {
      let shapeName;
      switch (shape) {
        case "circle":
          shapeName = new circle();
          break;
        case "triangle":
          shapeName = new triangle();
          break;
        case "square":
          shapeName = new square();
          break;
      }
      //creating logo
      shapeName.setColor(colorShape);
      const svg = new svg();
      svg.setTextColor(colorText, characters);
      svg.setShape(shapeName);
      return writeFile("logo.svg", svg.render());
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
