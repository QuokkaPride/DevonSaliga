import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  password: "Ilovech33se!",
  host: "localhost",
  port: 5432,
  database: "world",
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

db.connect();

app.post("/user", (req, res) => {
  res.render("new.ejs");
});



let countries = [];
let total = 0;

// shows countries visited
app.get("/", (req, res) => {
  db.query("SELECT country_code FROM visited_countries", (err, res) => {
    if (err) {
      console.error(err);
      return;
    } else {
      countries = res.rows.map(row => row.country_code);
    }
  });
  total = countries.length;
  res.render("index.ejs", { countries: countries, total: total  });
});

// adds country to visited countries
app.post("/add", (req, res) => {
  const countryVisited = req.body.country;
  if (!countries.includes(countryVisited)) {
    db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [countryVisited], (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error inserting country");
        return;
      }
      countries.push(countryVisited);
      total = countries.length;
      res.redirect("/");
    });
  } else {
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
