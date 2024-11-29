import readDatabase from '../utils';
/**
 * StudentsController class
 * @class StudentsController
 * @export StudentsController
 * @extends Controller
 * @description Class for StudentsController
 */

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const databasePath = process.argv[2];
      const studentsByField = await readDatabase(databasePath);

      let response = 'This is the list of our students\n';
      // A comparison function for ordering a list of strings in ascending
      // order by alphabetic order and case insensitive
      // const fields = Object.keys(studentsByField).sort((a, b) =>
      //  a.toLowerCase().localeCompare(b.toLowerCase())
      // );
      const fields = (a, b) => {
        if (a[0].toLowerCase() < b[0].toLowerCase()) {
          return -1;
        }
        if (a[0].toLowerCase() > b[0].toLowerCase()) {
          return 1;
        }
        return 0;
      };
      for (const field of fields) {
        const students = studentsByField[field];
        response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }

      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const databasePath = process.argv[2];
      const studentsByField = await readDatabase(databasePath);

      const students = studentsByField[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default StudentsController;
