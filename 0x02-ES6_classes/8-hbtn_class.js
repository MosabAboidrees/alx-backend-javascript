// Define the HolbertonClass class
export default class HolbertonClass {
  // Constructor with parameters for size and location
  constructor(size, location) {
    // Validate and assign size and location
    this._size = size;
    this._location = location;
  }

  // Override type casting for Number to return the size
  valueOf() {
    return this._size;
  }

  // Override type casting for String to return the location
  toString() {
    return this._location;
  }
}
