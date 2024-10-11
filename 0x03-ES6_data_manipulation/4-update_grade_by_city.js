// Define the function updateStudentGradeByCity
export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students by city
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      // Find the grade for the current student
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id);

      // Return the student object with the new grade or 'N/A'
      return {
        ...student,
        grade: gradeObject ? gradeObject.grade : 'N/A',
      };
    });
}
