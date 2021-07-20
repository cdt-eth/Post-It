const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
require("dotenv").config();

// middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("running on port 5000");
});
