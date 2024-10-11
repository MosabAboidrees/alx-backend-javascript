// Create a WeakMap instance
export const weakMap = new WeakMap();

// Define the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the weakMap
  if (!weakMap.has(endpoint)) {
    // If not, set the initial query count to 1
    weakMap.set(endpoint, 1);
  } else {
    // Otherwise, increment the query count
    const queryCount = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, queryCount);

    // If the query count is 5 or more, throw an error
    if (queryCount >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
