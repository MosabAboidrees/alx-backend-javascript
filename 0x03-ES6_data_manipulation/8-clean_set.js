// Define the function cleanSet
export default function cleanSet(set, string) {
  // Return an empty string if startString is empty
  if (string === undefined || string.length === 0) {
    return '';
  }
  return [...set]
    .filter((str) => (str !== undefined ? str.startsWith(string) : ''))
    .map((str) => (str !== undefined ? str.slice(string.length) : ''))
    .join('-');
}
