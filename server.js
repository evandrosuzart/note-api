const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require('cors')


const env = require('./enviroment')


mongoose.set('strictQuery', false);
mongoose.connect(env.URL, {
  useNewUrlParser: true,
});
requireDir("./src/models");

const app = express();
app.use(cors(cors.CorsOptions))
app.use(express.json())

app
  .use('/api', require('./src/routes/Routes'))
  .listen(3001)

