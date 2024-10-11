// Interface defining the methods that a Director should implement
interface DirectorInterface {
  workFromHome(): string;           // Director's ability to work from home
  getCoffeeBreak(): string;         // Director's ability to get a coffee break
  workDirectorTasks(): string;      // Director's work tasks
}

// Interface defining the methods that a Teacher should implement
interface TeacherInterface {
  workFromHome(): string;           // Teacher's ability to work from home
  getCoffeeBreak(): string;         // Teacher's ability to get a coffee break
  workTeacherTasks(): string;       // Teacher's work tasks
}

// Class that implements the DirectorInterface
class Director implements DirectorInterface {
  // Director works from home
  workFromHome = (): string => 'Working from home';

  // Director gets a coffee break
  getCoffeeBreak = (): string => 'Getting a coffee break';

  // Director performs director tasks
  workDirectorTasks = (): string => 'Getting to director tasks';
}

// Class that implements the TeacherInterface
class Teacher implements TeacherInterface {
  // Teacher cannot work from home
  workFromHome = (): string => 'Cannot work from home';

  // Teacher cannot take a break
  getCoffeeBreak = (): string => 'Cannot have a break';

  // Teacher performs teacher tasks
  workTeacherTasks = (): string => 'Getting to work';
}

// Function to create an employee based on salary
// If salary is less than 500, create a Teacher; otherwise, create a Director
export const createEmployee = (salary: number | string): Teacher | Director => {
  if (Number(salary) < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Function to check if the employee is a Director
export const isDirector = (employee: Teacher | Director): boolean => {
  if (employee instanceof Director) {
    return true;
  } else {
    return false;
  }
}

// Function to execute work based on whether the employee is a Teacher or Director
export const executeWork = (employee: Teacher | Director): void => {
  if (employee instanceof Teacher) {
    console.log(employee.workTeacherTasks());
  } else if (employee instanceof Director) {
    console.log(employee.workDirectorTasks());
  }
}

// Define a type for the subjects: either 'Math' or 'History'
type Subjects = 'Math' | 'History';

// Function to teach a class based on the subject
// If todayClass is 'Math', return 'Teaching Math', otherwise 'Teaching History'
export const teachClass = (todayClass: Subjects): string => {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}
