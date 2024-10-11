// Define the function cleanSet
export default function cleanSet(set, startString) {
  // Return an empty string if startString is empty
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  // Filter and map the set values that start with startString
  return Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}
