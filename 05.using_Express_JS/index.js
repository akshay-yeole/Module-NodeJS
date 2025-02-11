const express = require("express");

// Create an express app
const app = express();

// Define a route for the GET method
app.get("/", (req, res) => {
    res.send("This is a GET request");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
