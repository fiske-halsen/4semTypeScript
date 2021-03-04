const http = require("http");
const ex1d = require("./exercise1d");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome");
    res.end();
  }

  if (req.url === "/api/securerandoms") {
    ex1d.getResult().then((data) => res.write(JSON.stringify(data)));
    setTimeout(() => {
      res.end();
    }, 3000);
  }
});

server.listen(3000);

console.log("listening on port 3000.... ");
