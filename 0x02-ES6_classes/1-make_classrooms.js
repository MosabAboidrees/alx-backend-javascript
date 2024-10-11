// Import the ClassRoom class
import Classroom from './0-classroom';

// Function to initialize an array of ClassRoom objects
export default function initializeRooms() {
  // Return an array with 3 ClassRoom objects of sizes 19, 20, and 34
  return [new Classroom(19), new Classroom(20), new Classroom(34)];
}
