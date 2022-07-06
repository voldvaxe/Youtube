let obj = {
  a: 1,
};
obj.b = 2;
console.log(obj);
//-----------------------------------------------------
function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, (sum) => {
  console.log(sum);
});
//-----------------------------------------------------
var http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  console.log("Hello world");
  res.end("Hello world");
});
server.listen(8080);
//-----------------------------------------------------
/*
    npm -v
    npm --version
    npm init
    npm init -y
    npm i jsonwebtoken
    .gitignore
*/
