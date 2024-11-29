#!/usr/bin/env node

const express = require('express');
const fs = require('fs');

// Create an Express application
const app = express();

/**
 * Reads a CSV file asynchronously and counts students by field.
 * @param {string} path - Path to the CSV file.
 * @returns {Promise<string>} A promise that resolves to the formatted student count.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const header = lines.shift();

      if (!header || !lines.length) {
        reject(new Error('Database is empty or incorrectly formatted'));
        return;
      }

      const studentsByField = {};
      for (const line of lines) {
        const [firstname, lastname, age, field] = line.split(',');

        if (firstname && lastname && age && field) {
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstname);
        }
      }

      const totalStudents = Object.values(studentsByField).flat().length;
      let result = `Number of students: ${totalStudents}\n`;
      for (const [field, students] of Object.entries(studentsByField)) {
        result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }

      resolve(result.trim());
    });
  });
}

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

// Define a route for the /students endpoint
app.get('/students', async (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  const databasePath = process.argv[2]; // Get the database path from the command-line arguments
  try {
    const studentList = await countStudents(databasePath);
    res.end(studentList);
  } catch (error) {
    res.end(error.message);
  }
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});

// Export the app
module.exports = app;
