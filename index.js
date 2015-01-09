var app  = require("StraightForward");
app.views({
  //  "/"        : "public/index.html",
  //  "allowAll" : ["public/"],
  "/"            : RootViewController,
  "/favicon.ico" : function (request, response, _url) {
    response.writeHead(200, {"Content-Type": "image/png"});
    response.end();
  },
  "/user"        : UserViewController,
  "fallback"     : ResourceRequestFallback
});

/*
 * Common Method Signature is function <Function Name> (request, response, query, hash) {...}
 * All methods should end() the responses, it is the programmer's responsibility
*/
function RootViewController (request, response, _url) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<html><head><script src='index.js'></script></head><body><h1>Custom Root View</h1></body></html>");
  response.end();
}

function UserViewController (request, response, _url) {
  response.writeHead(200, {"Content-Type": "application/json"});
  var str = "{\n"
  + "'you'     : 'are', \n"
  + "'viewing' : 'the', \n"
  + "'default' : 'json',\n"
  + "'response': 'here',\n"
  + "'and'     : 'your',\n"
  + "'query'   : 'was', \n"
  + JSON.stringify(query)
  + "\n }";
  response.write(str);
  response.end();
}

function ResourceRequestFallback(request, response, _url) {
  response.statusCode = 404;
  response.write("Custom 404 : Resource unavailable at Path:" + _url.pathname, 'utf8');
  response.end();
}

app.init();
app.listen(8888);


console.log("listening on port 8888");