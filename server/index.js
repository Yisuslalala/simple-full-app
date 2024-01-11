const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./src/modules/Mysql.database");

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello world");
});

app.get("/latest", (req, res) => {
  const q =
    "SELECT name, description, price, type FROM products ORDER BY created_at DESC LIMIT 1";
  db.query(q, (err, result) => {
    if (err) {
      console.err(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/shop", (_, res) => {
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
