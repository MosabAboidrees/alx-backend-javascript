#!/usr/bin/env node

// Display the initial welcome message
console.log('Welcome to Holberton School, what is your name?');

// Set up the stdin stream to read user input
process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Get the user input and remove trailing spaces
  console.log(`Your name is: ${name}`);
  if (!process.stdin.isTTY) { // Check if input is piped
    console.log('This important software is now closing');
  }
  process.exit(); // End the process
});
