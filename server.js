require("coffee-script");

var nconf = require("nconf")
  , http = require("http")
  , server = require("./index");


http.createServer(server).listen(nconf.get("port"));

console.log("Server started on port", nconf.get("port"))
