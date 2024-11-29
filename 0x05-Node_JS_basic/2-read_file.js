#!/usr/bin/env node

const fs = require('fs');

/**
 * Reads a CSV file synchronously and counts students by field.
 * @param {string} path - Path to the CSV file.
 */
function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf-8');

    // Split the data into lines and filter out empty lines
    const lines = data.toString().split('\n');

    // Remove the header row
    const header = lines.shift();

    if (!header || !lines.length) {
      throw new Error('Database is empty or incorrectly formatted');
    }

    // Process the student data
    const studentsByField = {};
    for (const line of lines) {
      const [firstname, lastname, age, field] = line.split(',');

      if (firstname && lastname && age && field) {
        // Initialize the field array if it doesn't exist
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      }
    }

    // Log the total number of students
    const totalStudents = Object.values(studentsByField).flat().length;
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field
    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(
        `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`,
      );
    }
  } catch (error) {
    // Handle file read errors
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
