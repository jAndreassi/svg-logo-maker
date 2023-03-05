const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What 3 characters do you want on your logo?",
      name: "text",
    },
    // {
    //   type: "list",
    //   message: "Please choose a shape?",
    //   options: ["square", "circle", "triangle"],
    //   name: "shape",
    // },
    {
      type: "input",
      message: "What color do you want the shape to be?",
      name: "shapecolor",
    },
    {
      type: "input",
      message: "What color do you want your text to be?",
      name: "textcolor",
    },
  ])
  .then((answers) =>
    fs.writeFile(
      "./examples/logo.svg",
      `<?xml version="1.0" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg">
<g>
<circle cx="55" cy="75" r="50" fill ="${answers.shapecolor}"></circle>
<text x="15" y="75" r="50" font-size="20px" fill="${answers.textcolor}">${answers.text}</text>
</g>

</svg>
</xml>`,
      (err) => (err ? console.log(err) : console.log("Here is your logo"))
    )
  );
