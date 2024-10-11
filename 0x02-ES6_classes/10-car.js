// Define the Car class
export default class Car {
  // Constructor with parameters for brand, motor, and color
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car object
  cloneCar() {
    // Create a new instance of the same class
    const Clone = this.constructor[Symbol.species] || this.constructor;
    return new Clone();
  }

  // Optional: If you want to define [Symbol.species] for this class
  static get [Symbol.species]() {
    return this;
  }
}
