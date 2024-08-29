import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

let totalCorrect = 0;
let lastQuestion = 0;


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



const db = new pg.Client({
  connectionString: "postgresql://postgres:Ilovech33se!@localhost:5432/world",
});

db.connect();

let quiz = [];
db.query("SELECT * FROM flags", (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  quiz = res.rows;
  console.log(quiz);
});

let currentQuestion = {};

// GET home page
app.get("/", (req, res) => {
  totalCorrect = 0;
  nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});

// POST a new post
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.name.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }
  lastQuestion = currentQuestion.name
  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    lastQuestion: lastQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomCountry;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
