const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const items = require("./routes/api/items");
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("MongoDB Connected.");
  })
  .catch(err => {
    console.log(err);
  });

const port = process.env.PORT || 8080;

app.use("/api", items);
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
