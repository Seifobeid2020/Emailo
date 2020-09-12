import express from "express";
import path from "path";
// let template = ejs.compile(str, options);
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  // res.render("/home");
  res.send({ hi: "thessre" });
});

const PORT = process.env.PORT || 3000;

app.listen(3000);
