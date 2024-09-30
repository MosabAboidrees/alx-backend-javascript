// Function taskFirst uses const for the variable
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// Function getLast remains unchanged
export function getLast() {
  return ' is okay';
}

// Function taskNext uses let for the variable
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}
