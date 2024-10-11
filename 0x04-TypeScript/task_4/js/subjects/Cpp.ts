namespace Subjects {
    export interface Teacher {
      experienceTeachingC?: number;
    }
  
    export class Cpp extends Subjects.Subject {
      getRequirements(): string {
        return 'Here is the list of requirements for Cpp';
      }
  
      getAvailableTeacher(): string {
        if (!this.teachers || !(this.teachers.experienceTeachingC >= 0)) {
          return 'No available teacher';
        }
        return `Available Teacher: ${this.teachers.firstName}`;
      }
    }
  }
