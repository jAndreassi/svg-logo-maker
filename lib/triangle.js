const Shape = require("./shapes");

class triangle extends Shape {
  constructor(text, textColor, shapeColor, shapeOption, textOption) {
    super(text, shapeColor, textColor);
    this.shapeOption = `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />`;
    this.textOption = `<text x="115" y="135" font-size="40px" fill="${textColor}">${text}</text>`;
  }
  render() {
    return this.shapeOption;
  }
}
module.exports = triangle;
