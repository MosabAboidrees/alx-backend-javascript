// Import the Building class
import Building from './5-building';

// Define the SkyHighBuilding class that extends from Building
export default class SkyHighBuilding extends Building {
  // Constructor with parameters for sqft and floors
  constructor(sqft, floors) {
    // Call the parent constructor for sqft
    super(sqft);
    // Validate and assign floors
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
