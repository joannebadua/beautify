const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Express session
app.use(session({
  // Use dotenv dependency to hide secret
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 2592000000,
    httpOnly: false
  }
}));

app.use(cookieParser());
require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

// enable CORS so that browsers don't block requests.
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://localhost:3001'); // eventually change to heroku url - may need to be localhost:3000
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Add routes to view?
app.use(routes);

require('./db');

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
