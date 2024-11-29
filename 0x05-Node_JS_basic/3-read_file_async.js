#!/usr/bin/env node

const fs = require('fs');

/**
 * Reads a CSV file asynchronously and counts students by field.
 * @param {string} path - Path to the CSV file.
 * @returns {Promise<void>} A promise that resolves after logging the student counts.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        // Reject the promise if the file cannot be read
        reject(new Error('Cannot load the database'));
        return; // Explicit return to satisfy ESLint
      }

      // Split the data into lines and filter out empty lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      // Remove the header row
      const header = lines.shift();

      if (!header || !lines.length) {
        reject(new Error('Database is empty or incorrectly formatted'));
        return; // Explicit return to satisfy ESLint
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

      // Resolve the promise after completing the logs
      resolve();
    });
  });
}

module.exports = countStudents;
