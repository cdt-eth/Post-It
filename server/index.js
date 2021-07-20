const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
require("dotenv").config();

// middleware
app.use(cors());
app.use(express.json()); // we can access `req.body`

// _____ROUTES_____
// Create Post
app.post("/posts", async (req, res) => {
  try {
    const { title, description } = req.body;
    const newPost = await pool.query(
      "INSERT INTO posts (title, description) VALUES($1,$2) RETURNING *",
      [title, description]
    );
    console.log("req.body:", req.body);
    res.json(newPost.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Get All Posts
app.get("/posts", async (req, res) => {
  try {
    const allPosts = await pool.query("SELECT * FROM posts");
    res.json(allPosts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get A Specific Post
app.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await pool.query("SELECT * FROM post WHERE post_id = $1", [
      id,
    ]);
    res.json(post.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Update A Specific Post
app.put("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatePost = await pool.query(
      "UPDATE posts SET title = $1, description = $2 WHERE post_id = $3",
      [title, description, id]
    );

    res.json("Post was updated");
  } catch (err) {
    console.error(err.message);
  }
});

// Delete
app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletePosts = await pool.query(
      "DELETE FROM posts WHERE post_id = $1",
      [id]
    );

    res.json("Post was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("running on port 5000");
});
