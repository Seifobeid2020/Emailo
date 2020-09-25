import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import keys from "../config/keys.js";
// import { profile } from "console";
import mongoose from "mongoose";

const User = mongoose.model("users");

export default () => {
  console.log("this is keys : " + keys.cookieKey);
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
      done(null, user);
    });
  });
  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
        proxy: true,
      },
      (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id }).then((existingUser) => {
          if (existingUser) {
            done(null, existingUser);
          } else {
            new User({ googleId: profile.id }).save().then((user) => {
              done(null, user);
            });
          }
        });
      }
    )
  );
};
