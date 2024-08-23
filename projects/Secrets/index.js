import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/random";

app.use(express.static("public"));


app.get("/", async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        const secret = response.data.secret;
        const user = response.data.username;
        res.render("index.ejs", { secret: secret, user: user });
    } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

