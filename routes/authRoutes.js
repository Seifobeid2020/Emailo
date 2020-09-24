import passport from "passport";
export default (app) => {
  app.get("/", (req, res) => {
    res.send({ hi: "thessre" });
  });

  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));
  // passport.use(new GoogleStrategy());
  app.get("/auth/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });
  app.get("/auth/curent_user", (req, res) => {
    res.send(req.user);
  });
};
