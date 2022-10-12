const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const connection = require("./db/conn");

const DefaultData = require("./default");

app.use(require('./routes/route'));

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

DefaultData()