const http = require("http");
const osObj = require("./osfile");
const DOS_Detector = require("./dosDetector.js");

const publisher = new DOS_Detector(3000);

const server = http.createServer((req, res) => {
  if (req.url === "/api/os-info") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(osObj));
    publisher.addUrl(req.url);
    return res.end();
  }
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on("connection", (sock) => {
  // You can get the client-IP in here, using sock.remoteAddress)
  sock.remoteAddress;
  console.log();
});
server.listen(3000);
console.log("listening on 3000");
//Register for the "DosDetected" event and console.log the url and time info.
publisher.on("DosDetected", (e) => console.log(JSON.stringify(e)));
