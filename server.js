const express = require("express");
const cors = require("cors");
const compression = require("compression");
const session = require("express-session");
const helmet = require('helmet');
const csrf = require('csurf');
require("dotenv").config();

// MongoDB Connection
// require("./config/mongodb");

// Create an Express App
const expressApp = express();
const PORT = process.env.PORT || 3000;
const SESSION_SECRET = process.env.SESSION_SECRET;

// Set up the Express App
expressApp.use(express.static(__dirname + "/resources"));
expressApp.use(cors(), compression());
// expressApp.use(helmet());
expressApp.use(
  express.urlencoded({
    extended: true,
  })
);
expressApp.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
expressApp.set("views", __dirname + "/resources/views");
expressApp.set("view engine", "ejs");

// Import Routers
const AuthRouter = require("./app/Routers/auth.router");
const HomeRouter = require("./app/Routers/home.router");

// Use Routers
expressApp.use("/", AuthRouter);
expressApp.use("/", HomeRouter);

expressApp.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});

// Export the Express App
module.exports = expressApp;
