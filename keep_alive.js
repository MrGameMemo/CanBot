var http = require('http');

http.createServer(function (req, res) {
  res.write("CanBot est actuellement en ligne !");
  res.end();
}).listen(8080);
