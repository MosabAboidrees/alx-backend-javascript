import fs from 'fs';

/**
 * Reads a CSV file and organizes students by field.
 * @param {string} path - Path to the CSV file.
 * @returns {Promise<Object>} - An object mapping fields to arrays of student first names.
 */
async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const header = lines.shift();

    if (!header || !lines.length) {
      throw new Error('Database is empty or incorrectly formatted');
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

    return studentsByField;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

export default readDatabase;
