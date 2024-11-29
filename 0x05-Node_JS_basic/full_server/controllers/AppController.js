/**
 * AppController.js
 * @description: Controller for the App route of the API (GET '/')
 * @class AppController
 * @extends Controller
 * @method getHomepage: Method for the route GET '/'
 * @authors: Mosab Aboidrees
 */

class AppController {
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
