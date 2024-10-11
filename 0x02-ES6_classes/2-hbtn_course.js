// 2-hbtn_course.js

// Define the HolbertonCourse class
export default class HolbertonCourse {
  // Constructor with parameters for name, length, and students
  constructor(name, length, students) {
    // Validate and assign name
    this.name = name;
    // Validate and assign length
    this.length = length;
    // Validate and assign students
    this.students = students;
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

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length with validation
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students with validation
  set students(value) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
