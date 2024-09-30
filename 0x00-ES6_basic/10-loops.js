export default function appendToEachArrayValue(array, appendString) {
  /* Declaring an empty array to store the modified values */
  const arrayEnd = [];

  /* Using for...of to iterate through each value of the array */
  for (const idx of array) {
    /* Appending the string to each value and pushing it to arrayEnd */
    arrayEnd.push(`${appendString}${idx}`);
  }

  /* Returning the new array with the modified values */
  return arrayEnd;
}
