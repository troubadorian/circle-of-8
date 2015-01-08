var http     = require("http");
var url      = require("url");
var SFRoutes = require("SFRoutes");  
http.createServer(function(request, response) {
  //  for( var item in request){
  //    console.log(item);
  //    console.log("----");
  // console.log(request[item]);  
  //  }
  var requestedURL = url.parse(request.url, true);

  SFRoutes[requestedURL.pathname](response, requestedURL.query, requestedURL.hash);

}).listen(8888);
console.log("listening on port 8888");