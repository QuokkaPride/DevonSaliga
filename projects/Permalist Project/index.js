import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "Ilovech33se!",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

let listItems = [];

app.get("/", (req, res) => {
  const query = "SELECT * FROM items";
  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching items from database");
    } else {
      listItems = result.rows;
      res.render("index.ejs", {
        listTitle: "Today",
        listItems: listItems,
      });
    }
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;  
  try {
    await db.query(
      "INSERT INTO items (title) VALUES ($1) RETURNING *;",
      [item]
    );
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding item to database");
    return; // Ensure we don't redirect if there's an error
  }
  res.redirect("/");
}); 

app.post("/edit", async (req, res) => {
  const itemId = req.body.updatedItemId;
  const newTitle = req.body.updatedItemTitle;

  try {
    await db.query(
      "UPDATE items SET title = $1 WHERE id = $2 RETURNING *;",
      [newTitle, itemId]
    );
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating item in database");
  }
});

app.post("/delete", async (req, res) => {
  const itemId = req.body.deleteItemId;
  try {
    await db.query("DELETE FROM items WHERE id = $1 RETURNING *;", [itemId]);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting item from database");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
