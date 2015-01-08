var MC = {};
//function carry the same name as defined in Routes
MC.MyFaviconViewController = function (request, response, query, hash) {
	response.writeHead(200, {"Content-Type": "image/png"});
	response.end();
}

//An alternate approach can be the following
//Define function with any name you like
//Named methods are always good
function MyRootViewController_WithCustomName (request, response, query, hash) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<html><head></head><body><script src='main.js'></script><h1>I'm at the root view</h1></body></html>");
	response.end();
}
//Make sure the name matches when exporting
MC.MyRootViewController = MyRootViewController_WithCustomName;

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