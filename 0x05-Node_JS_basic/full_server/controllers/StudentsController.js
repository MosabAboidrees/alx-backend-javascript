import readDatabase from '../utils';

/**
 * List of valid majors.
 */
const VALID_MAJORS = ['CS', 'SWE'];

/**
 * Contains the student-related route handlers.
 */
class StudentsController {
  /**
   * Handles the /students endpoint.
   * @param {Object} request - The HTTP request object.
   * @param {Object} response - The HTTP response object.
   */
  static getAllStudents(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(dataPath)
      .then((studentGroups) => {
        const responseParts = ['This is the list of our students'];

        // Custom sorting function for case-insensitive field names
        const sortedFields = Object.entries(studentGroups).sort((a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        });

        for (const [field, group] of sortedFields) {
          const studentList = group.map((student) => student.firstname).join(', ');
          responseParts.push(`Number of students in ${field}: ${group.length}. List: ${studentList}`);
        }

        response.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        response.status(500).send(err instanceof Error ? err.message : String(err));
      });
  }

  /**
   * Handles the /students/:major endpoint.
   * @param {Object} request - The HTTP request object.
   * @param {Object} response - The HTTP response object.
   */
  static getAllStudentsByMajor(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(dataPath)
      .then((studentGroups) => {
        const group = studentGroups[major] || [];
        const studentList = group.map((student) => student.firstname).join(', ');
        response.status(200).send(`List: ${studentList}`);
      })
      .catch((err) => {
        response.status(500).send(err instanceof Error ? err.message : String(err));
      });
  }
}

export default StudentsController;
