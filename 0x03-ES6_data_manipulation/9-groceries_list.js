// Define the function groceriesList
export default function groceriesList() {
  // Create a new Map with the groceries and their quantities
  const groceries = new Map();

  // Set the items in the map
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);

  // Return the map
  return groceries;
}
