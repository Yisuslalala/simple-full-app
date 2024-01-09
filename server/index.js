const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./src/modules/Mysql.database");

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/shop", (req, res) => {
  const q = "SELECT * FROM products";
  db.query(q, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, () => {
  console.log("App listening on port:", PORT);
});
