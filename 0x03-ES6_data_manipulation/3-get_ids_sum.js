// Define the function getStudentIdsSum
export default function getStudentIdsSum(students) {
  // Use reduce to sum the ids of the students
  return students.reduce((sum, student) => sum + student.id, 0);
}
