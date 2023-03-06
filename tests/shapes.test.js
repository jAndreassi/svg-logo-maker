const Circle = require("../lib/circle.js");
const Shapes = require("../lib/shapes.js");
const Square = require("../lib/square.js");
const Triangle = require("../lib/triangle.js");
// const circle = require("../lib/circle.js");

describe("Shape", () => {
  describe("circle", () => {
    it("Should create circle svg logo", () => {
      const newShape = new Circle();
      const circle = 'cx="200" cy="200" r="150"';
      expect(newShape.render()).toEqual(expect.stringContaining(circle));
    });
  });
  describe("square", () => {
    it("Should create square svg logo", () => {
      const newShape = new Square();
      const square = 'x="10" y="10" width="300" height="300"';
      expect(newShape.render()).toEqual(expect.stringContaining(square));
    });
  });

  describe("triangle", () => {
    it("Should create triangle svg logo", () => {
      const newShape = new Triangle();
      const triangle = "150, 18 244, 182 56, 182";
      expect(newShape.render()).toEqual(expect.stringContaining(triangle));
    });
  });
});
