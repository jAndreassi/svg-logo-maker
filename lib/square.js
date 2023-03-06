const Shape = require("./shapes");

class square extends Shape {
  constructor(text, textColor, shapeColor, shapeOption, textOption) {
    super(text, shapeColor, textColor);
    this.shapeOption = `<rect x="10" y="10" width="300" height="300" fill="${shapeColor}"/>`;
    this.textOption = `<text x="95" y="160" font-size="50px" fill="${textColor}">${text}</text>`;
  }
}

module.exports = square;
