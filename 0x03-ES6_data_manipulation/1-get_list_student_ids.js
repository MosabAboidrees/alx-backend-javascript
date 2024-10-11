// Define the function getListStudentIds
export default function getListStudentIds(students) {
  // Check if the argument is an array, return an empty array if not
  if (!Array.isArray(students)) {
    return [];
  }

  // Return an array of ids using the map function
  return students.map((student) => student.id);
}
