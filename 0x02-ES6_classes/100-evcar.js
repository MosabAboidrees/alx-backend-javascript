// Import the Car class
import Car from './10-car';

// Define the EVCar class that extends Car
export default class EVCar extends Car {
  // Constructor with parameters for brand, motor, color, and range
  constructor(brand, motor, color, range) {
    // Call the parent constructor for brand, motor, and color
    super(brand, motor, color);
    this._range = range;
  }

  // Override the cloneCar method to return an instance of Car
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
