import fs from 'fs';

/**
 * Reads the data of students in a CSV file.
 * @param {string} dataPath - The path to the CSV file.
 * @returns {Promise<object>} - A promise that resolves to an object where
 * fields are keys, and values are arrays of student objects.
 */
const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const fileLines = data.trim().split('\n');
    const studentGroups = {};

    // Extract property names from the header line
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    // Process each student record
    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(',');
      const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
      const field = studentRecord[studentRecord.length - 1];

      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      const studentEntries = studentPropNames.map((propName, idx) => [
        propName,
        studentPropValues[idx],
      ]);
      studentGroups[field].push(Object.fromEntries(studentEntries));
    }

    resolve(studentGroups);
  });
});

export default readDatabase;
