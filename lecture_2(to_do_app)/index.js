const express = require("express");
const app = express();

// Load environment variables from .env file
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Import Todo API routes
const todoRoutes = require("./routes/route");

// Mount all Todo routes under /api
app.use("/api", todoRoutes);

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server started at port no. ${PORT}`);
});

// Connect to the database
const db = require("./config/databse");
db();

// Default route for testing the API
app.get("/", (req, res) => {
  res.send("Hello from Todo API");
});
//now run the server using node index.js