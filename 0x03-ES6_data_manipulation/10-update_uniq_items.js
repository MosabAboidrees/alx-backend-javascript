// Define the function updateUniqueItems
export default function updateUniqueItems(map) {
  // Check if the argument is a map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the map and update items with quantity 1
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });

  // Return the updated map
  return map;
}
