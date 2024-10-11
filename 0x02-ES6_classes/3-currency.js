// Define the Currency class
export default class Currency {
  // Constructor with parameters for code and name
  constructor(code, name) {
    // Validate and assign code
    this.code = code;
    // Validate and assign name
    this.name = name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code with validation
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name with validation
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Method to display the full currency format
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
