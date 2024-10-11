namespace Subjects {
    export class Subject {
      teachers: Subjects.Teacher;
  
      set setTeacher(teacher: Subjects.Teacher) {
        this.teachers = teacher;
      }
    }
  }
