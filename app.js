const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send("mangoTodo!");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

module.exports = app;
