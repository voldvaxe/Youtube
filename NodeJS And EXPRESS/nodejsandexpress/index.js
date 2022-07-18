const express = require("express");
const app = express();
var cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
const bcrypt = require("bcrypt");
app.get("/:passwor", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.params.passwor, 10);
  res.send(hashedPassword);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
