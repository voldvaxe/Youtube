var http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  console.log("Hello world");
  res.end("Hello world");
});
server.listen(8080);

/*
    Node package manager
    npm -v
    npm --version
    npm init
    npm init -y
    npm i express
    .gitignore
*/
