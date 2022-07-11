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
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

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

//const express = require("express");
//const router = express.Router();

// define the home page route
router.get("/", (req, res) => {
  res.send("Birds home page");
});
// define the about route
router
  .route("/about")
  .get((req, res) => {
    res.send("About birds get");
  })
  .post((req, res) => {
    res.send("About birds post");
  });

module.exports = router;

/*
    const birds = require('./birds')

    // ...

    app.use('/birds', birds)
*/

//////////////////////////////////////

const PORT = 3000;
app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
