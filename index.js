import express from "express";
import User from "./models/User.js";
import passportMade from "./services/passport.js";
passportMade();
import passport from "passport";
import cookieSession from "cookie-session";
import authRoutes from "./routes/authRoutes.js";
import billingRoutes from "./routes/billingRoutes.js";
import mongoose from "mongoose";
import keys from "./config/keys.js";
import bodyParser from "body-parser";
import path from "path";
// const keys = require("./config/keys");
// let template = ejs.compile(str, options);
mongoose.connect(keys.mongoURI);
const app = express();

// app.use(passport1.initialize());
// app.use(passport1.session());
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billingRoutes(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  //like our main.js file, or main.css file!
  app.use(express.static("client-side/build"));

  //Express will save up the index.html file
  //if it doesn't recognize the route
  // const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client-side", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
