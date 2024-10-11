// Define the Teacher interface
// Teachers have the following properties:
interface Teacher {
  readonly firstName: string,     // Read-only, set during initialization
  readonly lastName: string,      // Read-only, set during initialization
  fullTimeEmployee: boolean,      // Required: whether the teacher is a full-time employee
  yearsOfExperience?: number,     // Optional: number of years of experience
  location: string,               // Required: location of the teacher
  [propName: string]: any,        // Allows for additional properties of any type, like 'contract'
}

// Define the Directors interface, which extends from Teacher
// Directors have an additional required property: numberOfReports
interface Directors extends Teacher {
  numberOfReports: number,
}

// Define the function printTeacher
// This function takes the first and last names of a teacher and returns the formatted name
// The format returned is the first letter of the first name followed by the full last name
export function printTeacher(firstName: string, lastName: string) {
  return `${firstName[0]}. ${lastName}`; // Returns the formatted string, e.g., 'J. Doe'
}

// Define an interface for the printTeacher function
// This function takes two string parameters (firstName and lastName) and returns a string
export interface printTeacherFunction {
  (firstName: string, lastName: string): string; // Function signature: takes firstName and lastName, returns a string
}

// Define an interface for a constructor of a StudentClass
// The constructor takes two string parameters: firstName and lastName
// The constructor creates an instance of IStudentClass
export interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

// Define the interface for IStudentClass
// This interface has two methods: workOnHomework and displayName
export interface IStudentClass {
  workOnHomework(): string;      // Method to indicate the student is working on homework
  displayName(): string;         // Method to return the student's first name
}

// Define the StudentClass, which implements IStudentClass
// This class represents a student with firstName and lastName, and methods to handle their actions
export class StudentClass implements IStudentClass {
  // Private properties to store first and last names
  private _firstName!: string;   // Private firstName
  private _lastName!: string;    // Private lastName

  // Constructor to initialize the firstName and lastName
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;  // Set the private _firstName property
    this._lastName = lastName;    // Set the private _lastName property
  }

  // Method to indicate the student is working on homework
  workOnHomework() {
    return 'Currently working';   // Returns a string indicating the student is working on homework
  }

  // Method to display the student's first name
  displayName() {
    return this._firstName;       // Returns the student's first name
  }
}
