import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Binds the routes to their corresponding handlers in the given Express application.
 * @param {Express.Application} app - The Express application instance.
 */
const mapRoutes = (app) => {
  // Root endpoint
  app.get('/', AppController.getHomepage);

  // Students list endpoint
  app.get('/students', StudentsController.getAllStudents);

  // Students by major endpoint
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
