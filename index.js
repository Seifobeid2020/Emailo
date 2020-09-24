import express from "express";
import User from "./models/User.js";
import passportMade from "./services/passport.js";
passportMade();
import passport from "passport";
import cookieSession from "cookie-session";
import authRoutes from "./routes/authRoutes.js";
import mongoose from "mongoose";
import keys from "./config/keys.js";

// const keys = require("./config/keys");
// let template = ejs.compile(str, options);
mongoose.connect(keys.mongoURI);
const app = express();

// app.use(passport1.initialize());
// app.use(passport1.session());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT);
