const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).json([
    { name: "OJO", age: 20 },
    { name: "Seun", age: 30 },
    { name: "Seye", age: 10 },
    { name: "Yori", age: 35 },
    { name: "Doyong", age: 12 },
    { name: "Fury", age: 40 },
  ]);
});

app.listen(4000, () => console.log("Container Start Running"));
