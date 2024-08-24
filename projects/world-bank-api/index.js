import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://api.worldbank.org/v2/country/";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Access World Bank Data on Countries!" });
});

app.post("/get-country", async (req, res) => {
  const iso2Code = req.body.iso2Code;
  console.log(iso2Code);
  try {
    const result = await axios.get(API_URL + iso2Code + "?format=json");
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});