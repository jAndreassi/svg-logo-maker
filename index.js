const fs = require("fs");
const inquirer = require("inquirer");
const Shapes = require("./lib/shapes.js");
const square = require("./lib/square.js");
const triangle = require("./lib/triangle.js");
const circle = require("./lib/circle.js");
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
inquirer.registerPrompt("maxlength-input", MaxLengthInputPrompt);

inquirer
  .prompt([
    {
      type: "maxlength-input",
      message: "What 3 characters do you want on your logo?",
      name: "text",
      maxLength: 3,
    },
    {
      type: "list",
      message: "Please choose a shape?",
      choices: ["square", "circle", "triangle"],
      name: "shape",
    },
    {
      type: "input",
      message: "What color do you want the shape to be?",
      name: "shapeColor",
    },
    {
      type: "input",
      message: "What color do you want your text to be?",
      name: "textColor",
    },
  ])
  .then((answers) => {
    let myShape;
    switch (answers.shape) {
      case "square":
        myShape = new square(
          answers.text,
          answers.textColor,
          answers.shapeColor
        );
        break;
      case "triangle":
        myShape = new triangle(
          answers.text,
          answers.textColor,
          answers.shapeColor
        );
        break;
      case "circle":
        myShape = new circle(
          answers.text,
          answers.textColor,
          answers.shapeColor
        );
        break;
    }
    fs.writeFile(
      "./examples/logo.svg",
      `<?xml version="1.0" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" height="100vh" width="100vw">
<g>
${myShape.shapeOption}
${myShape.textOption}
</g>

</svg>
</xml>`,
      (err) => (err ? console.log(err) : console.log("Generated logo.svg"))
    );
  });
