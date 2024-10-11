// Define the Building class
export default class Building {
  // Constructor with sqft parameter
  constructor(sqft) {
    // Validate and assign sqft
    if (typeof sqft !== 'number') {
      throw new TypeError('Square feet must be a number');
    }
    this._sqft = sqft;

    // Check if the child class has implemented evacuationWarningMessage
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }
}
