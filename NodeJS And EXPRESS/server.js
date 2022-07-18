const express = require("express");
const app = express();
const router = express.Router();
var cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
/*
  app.use((req, res, next) => {
    console.log("this is a middleware");
    next();
  });
*/

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/", (req, res) => {
  res.json({ msg: "Hello World" });
});

app.put("/user", (req, res) => {
  res.cookie("name", "value", {
    httpOnly: true,
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  res.send(req.body.name);
});

app.delete("/user", (req, res) => {
  res.send(req.cookies.name);
});

app.get("/user/:id", (req, res) => {
  res.send(req.params);
});
////////////////////////////////////

app
  .route("/book")
  .get((req, res) => {
    res.send("Get a random book");
  })
  .post((req, res) => {
    res.send("Add a book");
  })
  .put((req, res) => {
    res.send("Update the book");
  });

////////////////////////////////////

const jwt = require("jsonwebtoken");

app.get("/createUser/:name", (req, res) => {
  res.send(
    jwt.sign({ name: req.params.name }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1d",
    })
  );
});

const auth = (req, res, next) => {
  try {
    var token = req.header("Authorization");
    token = token.split(" ")[1];
    if (!token)
      return res.status(500).json({ msg: "invalid Authentication 1" });
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(400).json({ msg: "invalid Authentication 2" });
      req.user = user;
      next();
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

app.get("/user", auth, (req, res) => {
  res.json({ msg: "You are " + req.user.name });
});

////////////////////////////////////

const PORT = 3000;
app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
