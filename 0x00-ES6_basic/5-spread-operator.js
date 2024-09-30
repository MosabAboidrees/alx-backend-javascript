export default function concatArrays(array1, array2, string) {
  /* Using spread syntax to concatenate*/
  /* array1, array2, and each character of the string */
  return [...array1, ...array2, ...string];
}
