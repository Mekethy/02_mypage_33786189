var http = require("http");
const port = 8000;

http.createServer(function (req, res) {
  fs.readfile ("index.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
})
}).listen(port, function () {
  console.log(`Node server is running on port ${port}...`); //writes to console when server starts
});
