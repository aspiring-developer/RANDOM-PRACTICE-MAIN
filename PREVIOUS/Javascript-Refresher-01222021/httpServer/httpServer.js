let http = require("http");

let app = http.createServer(function(req, res) {
  res.end("HTTP server working!");
  console.log("It is working fine!");
})

app.listen(3000);

