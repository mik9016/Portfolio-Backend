const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 4000;
const URL = process.env.URL;

mongoose.connect(
  URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("conntected with DB");
  }
);

const emailRoute = require("./routes/email");
const loginRoute = require("./routes/adminLogin");

app.use(cors());
app.use(express.json());

app.use("/email", emailRoute);
app.use("/adminLogin", loginRoute);

app.listen(PORT, () => {
  console.log(`listening to the port:  ${PORT}`);
});

