import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "Ilovech33se!",
  port: 5432,
});

db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const email = username;

  const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [email]);
  if (checkResult.rows.length > 0) {
    // Send an alert and redirect back to the register page
    res.send(`
      <script>
        alert("User already exists. Try another email.");
        window.location.href = "/register";
      </script>
    `);
  } else {
    const result = await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, password]);
    res.render("secrets.ejs");
  }
});

app.post("/login", async (req, res) => {
  const passwordAttempt = req.body.password;
  const email = req.body.username;

  // Select id along with other user details
  const result = await db.query("SELECT id, password FROM users WHERE email = $1", [email]);
  const user = result.rows[0];
  const passwordActual = user.password;

  if (passwordAttempt === passwordActual) {
    // Pass the user ID to secrets.ejs
    res.render("secrets.ejs");
  } else {
    res.send(`
      <script>
        alert("EMAIL OR PASSWORD INCORRECT");
        window.location.href = "/login";
      </script>
    `);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
