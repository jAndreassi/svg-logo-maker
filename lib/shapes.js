// parent class
class Shape {
  constructor(text, shapeColor, textColor) {
    // this.shape = shape;
    this.text = text;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }

  render() {
    // return svg
  }
}

class triangle extends Shape {
  constructor(text, textColor, shapeColor, shapeOption, textOptio) {
    super(text, shapeColor, textColor);
    this.shapeOption = `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />`;
    this.textOption = `<text x="108" y="130" font-size="40px" fill="${textColor}">${text}</text>`;
  }
}

class square extends Shape {
  constructor(text, textColor, shapeColor, shapeOption, textOption) {
    super(text, shapeColor, textColor);
    this.shapeOption = `<rect x="10" y="10" width="300" height="300" fill="${shapeColor}"/>`;
    this.textOption = `<text x="95" y="160" font-size="50px" fill="${textColor}">${text}</text>`;
  }
}

class circle extends Shape {
  // taking 3 attributes from parent element and adding 2 more attributes
  constructor(text, textColor, shapeColor, shapeOption, textOption) {
    // super method saying what came from parent
    super(text, shapeColor, textColor);
    this.shapeOption = `<circle cx="200" cy="200" r="150" fill ="${shapeColor}"></circle>`;
    this.textOption = `<text x="130" y="210" r="50" font-size="20px" fill="${textColor}">${text}</text>`;
  }
}
