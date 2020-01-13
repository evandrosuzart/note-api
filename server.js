const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/notes", {
  useNewUrlParser: true
});

requireDir("./src/models");

//const Product = mongoose.model("Product");

app.use('/api', require('./src/routes/Routes'))

app.listen(3001);
