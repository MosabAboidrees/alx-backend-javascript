#!/usr/bin/env node

const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});

// Export the app
module.exports = app;
