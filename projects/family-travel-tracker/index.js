import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Ilovech33se!",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 0

app.get("/", async (req, res) => {
  let users = [];

  try {
    const result = await db.query("SELECT * FROM users");
    users = result.rows;
  } catch (err) {
    console.log("Error fetching users:", err.message);
  }

  if (req.query.user) {
    currentUserId = req.query.user;
  }

  const countries = await checkVisited();

  const currentUserName = users.find(user => user.id == currentUserId)?.name;
  const currentUserColor = users.find(user => user.id == currentUserId)?.color;

  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    currentUserColor: currentUserColor,
    currentUserId: currentUserId,
    currentUserName: currentUserName,
  });
});



async function checkVisited() {
  const result = await db.query("SELECT country_code FROM visited_countries WHERE user_id = $1", [currentUserId]);
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}


app.post("/add", async (req, res) => {
  const input = req.body["country"];
  currentUserId = req.body["currentUserId"];
  console.log(req.query);
  console.log("currentUserId:", currentUserId);
  console.log(input);
  
  try {
    const resultCountryCode = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );
    const data = resultCountryCode.rows[0];
    const countryCode = data.country_code;
    console.log(countryCode);
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2)",
        [countryCode, currentUserId]
      );
      res.redirect("/");
    } catch (err) {
      console.log("Error details:", err.message); // Log the error message
    }
  } catch (err) {
    console.log(err.message); // Log the error message
    res.redirect("/");
  }
});

app.post("/user", (req, res) => {
  if (req.body.add === "new") {
    res.render("new.ejs");
  } else {
    // Handle user selection
    const currentUserId = req.body.user;
    res.redirect("/?user=" + currentUserId); 
  }
});

app.post("/new", async (req, res) => {
  const userName = req.body.name;
  const currentUserName = userName;
  const userColor = req.body.color;
  console.log(userName, userColor);
  try {
    const result = await db.query(
      "INSERT INTO users (name, color) VALUES ($1, $2) RETURNING id",
      [userName, userColor]
    );
    const newUserId = result.rows[0].id; // Capture the returned ID
    res.redirect("/?user=" + newUserId);
  } catch (err) {
    console.log(err.message); // Log the error message
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
