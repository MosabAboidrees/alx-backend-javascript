// Define the function hasValuesFromArray
export default function hasValuesFromArray(set, array) {
  // Return true if all elements in the array exist in the set
  return array.every((value) => set.has(value));
}
