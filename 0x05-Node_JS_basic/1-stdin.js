// Print the welcome message to the standard output
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Check if the input is coming from a terminal (manual input)
if (process.stdin.isTTY) {
  // Set up an event listener to handle data entered by the user
  process.stdin.on('data', (data) => {
    // Print the user's name to the standard output
    process.stdout.write(`Your name is: ${data.toString()}`);
    // Exit the process after displaying the name
    process.exit();
  });
} else {
  // Handle the case where input is piped into the program
  process.stdin.on('data', (data) => {
    // Print the user's name to the standard output
    process.stdout.write(`Your name is: ${data.toString()}`);
    // Exit the process after displaying the name
    process.exit();
  });

  // Listen for the 'exit' event to print a closing message
  process.on('exit', () => {
    // Print the closing message when the program ends
    process.stdout.write('This important software is now closing\n');
  });
}
