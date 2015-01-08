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
  if(requestedURL.pathname in SFRoutes) {
    SFRoutes[requestedURL.pathname](request, response, requestedURL.query, requestedURL.hash);  
  } else {
    SFRoutes.fallback(request, response);
  }
  

}).listen(8888);
console.log("listening on port 8888");