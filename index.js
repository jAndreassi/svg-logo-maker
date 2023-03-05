const fs = require("fs");
const inquirer = require("inquirer");

fs.writeFile(
  "./examples/logo.svg",
  `<?xml version="1.0" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg">
<g>
<circle cx="55" cy="75" r="50" fill ="bisque"></circle>
<text x="15" y="75" r="50" font-size="20px" fill="blueviolet">Hello</text>
</g>

</svg>
</xml>`,
  (err) => (err ? console.log(err) : console.log("Here is your logo"))
);
