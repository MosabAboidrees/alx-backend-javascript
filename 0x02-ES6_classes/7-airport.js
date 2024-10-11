// Define the Airport class
export default class Airport {
  // Constructor with parameters for name and code
  constructor(name, code) {
    // Validate and assign name and code
    this._name = name;
    this._code = code;
  }

  // Override the toString method to return the code
  toString() {
    return `[object ${this._code}]`;
  }
}
