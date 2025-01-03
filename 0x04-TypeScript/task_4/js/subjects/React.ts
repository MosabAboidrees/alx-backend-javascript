namespace Subjects {
    export interface Teacher {
      experienceTeachingReact?: number;
    }
  
    export class React extends Subjects.Subject {
      getRequirements(): string {
        return 'Here is the list of requirements for React';
      }
  
      getAvailableTeacher(): string {
        if (!this.teachers || !(this.teachers.experienceTeachingReact >= 0)) {
          return 'No available teacher';
        }
        return `Available Teacher: ${this.teachers.firstName}`;
      }
    }
  }
