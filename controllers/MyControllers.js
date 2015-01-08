var MC = {};

function MyRootViewController (request, response, query, hash) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<html><head></head><body><script src='main.js'></script><h1>I'm at the root view</h1></body></html>");
	response.end();
}
MC.MyRootViewController = MyRootViewController;



MC.MyFaviconViewController = function (request, response, query, hash) {
	response.writeHead(200, {"Content-Type": "image/png"});
	response.end();
}



function MyUserViewController (request, response, query, hash) {
	response.writeHead(200, {"Content-Type": "application/json"});
	var str = "{\n"
		+	"'I'       : 'am',  \n"
		+	"'viewing' : 'the', \n"
		+	"'default' : 'json',\n"
		+ "'response': 'here',\n"
		+	"'and'     : 'my',  \n"
		+	"'query'   : 'is',  \n"
		+ JSON.stringify(query)
	+ "\n }";
	response.write(str);
	response.end();
}
MC.MyUserViewController = MyUserViewController;


module.exports = MC;