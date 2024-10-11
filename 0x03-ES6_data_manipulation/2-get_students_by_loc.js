// Define the function getStudentsByLocation
export default function getStudentsByLocation(students, city) {
  // Return an array of students filtered by the specified city
  return students.filter((student) => student.location === city);
}
