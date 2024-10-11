// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles',
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Create a table element
const table = document.createElement('table');

// Loop through the studentsList array and append rows to the table
studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();
  
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

// Append the table to the body of the HTML document
document.body.appendChild(table);
