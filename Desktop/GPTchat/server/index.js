require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5000", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

//routes

app.use("/api/", require("./routes/chatRoute"));

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
