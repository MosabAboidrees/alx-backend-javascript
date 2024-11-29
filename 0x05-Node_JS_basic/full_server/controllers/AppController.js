/**
 * Contains the miscellaneous route handlers.
 */
class AppController {
  /**
   * Handles the homepage route.
   * @param {Object} request - The HTTP request object.
   * @param {Object} response - The HTTP response object.
   */
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
