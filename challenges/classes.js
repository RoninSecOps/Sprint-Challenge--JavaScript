// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakerNew {
  constructor(properties) {
    this.length = properties.length;
    this.width = properties.width;
    this.height = properties.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}
const cuboid2 = new CuboidMakerNew({
  length: 4,
  width: 5,
  height: 5
});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMakerNew {
  constructor(attr) {
    super(attr);
    this.surface = attr.surface;
  }
  cubeNewVolume() {
    return this.length * this.width * this.height * this.height;
  }
  cubeNewSurface() {
    return 6 * (2 * this.surface);
  }
}

const stretchCube = new CubeMaker({
  length: 10,
  width: 5,
  height: 8,
  surface: 5
});

console.log(stretchCube);
console.log(stretchCube.cubeNewVolume());
console.log(stretchCube.cubeNewSurface());
