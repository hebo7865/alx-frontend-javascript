export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.ClonedCar]() {
    return this;
  }

  cloneCar() {
    const ClonedCar = this.constructor[Symbol.clonedCar];

    return new ClonedCar();
  }
}
