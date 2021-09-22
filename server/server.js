const express = require("express");
const app = express();
const cors = require("cors");

// middleware for express to parse json
app.use(express.json());

//whitelists api
app.use(cors());

// db models
const db = require("./models");

// Routers
const usersRouter = require("./routes/Users");
app.use("/", usersRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
