const Shape = require("./shapes");

class circle extends Shape {
  constructor(text, textColor, shapeColor, shapeOption, textOption) {
    super(text, shapeColor, textColor);
    this.shapeOption = `<circle cx="200" cy="200" r="150" fill ="${shapeColor}"></circle>`;
    this.textOption = `<text x="130" y="210" r="50" font-size="50px" fill="${textColor}">${text}</text>`;
  }
  render() {
    return this.shapeOption;
  }
}

module.exports = circle;
