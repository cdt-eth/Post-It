const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
require("dotenv").config();

// middleware
app.use(cors());
app.use(express.json()); // we can access `req.body`

// _____ROUTES_____
// Create Item
app.post("/posts", async (req, res) => {
  try {
    const { description } = req.body;
    const newItem = await pool.query(
      "INSERT INTO item (description) VALUES($1) RETURNING *",
      [description]
    );
    console.log("req.body:", req.body);
    res.json(newItem.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Get All Items
app.get("/posts", async (req, res) => {
  try {
    const allPosts = await pool.query("SELECT * FROM item");
    res.json(allPosts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get A Specific Item
app.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const item = await pool.query("SELECT * FROM item WHERE item_id = $1", [
      id,
    ]);
    res.json(item.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Update A Specific Item
app.put("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateItem = await pool.query(
      "UPDATE item SET description = $1 WHERE item_id = $2",
      [description, id]
    );

    res.json("Item was updated");
  } catch (err) {
    console.error(err.message);
  }
});

// Delete
app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteItem = await pool.query("DELETE FROM item WHERE item_id = $1", [
      id,
    ]);

    res.json("Item was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("running on port 5000");
});
