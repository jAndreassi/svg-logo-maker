const Shape = require("./shapes");

class square extends Shape {
  constructor(text, textColor, shapeColor, shapeOption, textOption) {
    super(text, shapeColor, textColor);
    this.shapeOption = `<rect x="10" y="10" width="300" height="300" fill="${shapeColor}"/>`;
    this.textOption = `<text x="105" y="165" font-size="50px" fill="${textColor}">${text}</text>`;
  }
  render() {
    return this.shapeOption;
  }
}

module.exports = square;
