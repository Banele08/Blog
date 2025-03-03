
const express = require ('express');
const mysql = require ('mysql2');
const cors = require('cors');
const app = express();
app.use(cors());


app.use(cors());
app.use(express.json());


//sql connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'BunnyBillionaire@400$',
    database:'blog_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL connected');
});


// Create a post
app.post("/posts", (req, res) => {
    const { title, content } = req.body;
    const sql = "INSERT INTO posts (title, content) VALUES (?, ?)";
    db.query(sql, [title, content], (err, result) => {
      if (err) throw err;
      res.json({ id: result.insertId, title, content });
    });
  });
  
  // Fetch all posts
  app.get("/posts", (req, res) => {
    db.query("SELECT * FROM posts", (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  // Create a comment
  app.post("/comments", (req, res) => {
    const { post_id, comment } = req.body;
    const sql = "INSERT INTO comments (post_id, comment) VALUES (?, ?)";
    db.query(sql, [post_id, comment], (err, result) => {
      if (err) throw err;
      res.json({ id: result.insertId, post_id, comment });
    });
  });
  
  // Fetch comments for a post
  app.get("/comments/:post_id", (req, res) => {
    const sql = "SELECT * FROM comments WHERE post_id = ?";
    db.query(sql, [req.params.post_id], (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  // Delete a comment
  app.delete("/comments/:id", (req, res) => {
    const sql = "DELETE FROM comments WHERE id = ?";
    db.query(sql, [req.params.id], (err, result) => {
      if (err) throw err;
      res.json({ message: "Comment deleted" });
    });
  });

//run serve
const PORT = 5000;
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
