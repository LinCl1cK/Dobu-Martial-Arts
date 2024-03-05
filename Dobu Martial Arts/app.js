const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line
const app = express();
const port = 8080;

// Use cors as middleware
app.use(cors({
  origin: '*', // Allow all origins
  methods: ['GET', 'POST'], // Allow GET and POST requests
  allowedHeaders: ['Content-Type', 'Authorization'] // Allow these headers
}));

// Middleware to parse the form data
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
});


// Define a POST route
app.post('/submit-form', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  // You can now use the name and email in your application.
  // For example, you might store them in a database or send an email.

  res.send('Form submitted successfully!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
