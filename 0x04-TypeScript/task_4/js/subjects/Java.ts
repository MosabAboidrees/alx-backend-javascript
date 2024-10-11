namespace Subjects {
    export interface Teacher {
      experienceTeachingJava?: number;
    }
  
    export class Java extends Subjects.Subject {
      getRequirements(): string {
        return 'Here is the list of requirements for Java';
      }
  
      getAvailableTeacher(): string {
        if (!this.teachers || !(this.teachers.experienceTeachingJava >= 0)) {
          return 'No available teacher';
        }
        return `Available Teacher: ${this.teachers.firstName}`;
      }
    }
  }
