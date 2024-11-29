#!/usr/bin/env node

const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the content type to plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Respond with the message
  res.end('Hello Holberton School!');
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the app
module.exports = app;
