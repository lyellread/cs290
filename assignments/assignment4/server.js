/*
 * Write your server code in this file.
 *
 * name:Lyell Read
 * email:readly@oregonstate.edu
 */

var http = require('http');
var fs = require('fs');

var index_html = fs.readFileSync('./public/index.html');
var index_js = fs.readFileSync('./public/index.js');
var style_css = fs.readFileSync('./public/style.css');
var html_404 = fs.readFileSync('./public/404.html');


function requestHandler (request, response) {

	
	if (request.url === '/index.html' || request.url === '/'){
		
		response.statusCode = 200;
		response.setHeader('Content-Type', 'text/html');
		
		/*write index.html*/
		response.write(index_html);
		
		/*send*/
		response.end();
		return;
		
	}
	
	else if (request.url === '/index.js'){
		
		response.statusCode = 200;
		response.setHeader('Content-Type', 'application/javascript');
		
		/*write index.js*/
		response.write(index_js);
		
		/*send*/
		response.end();
		return;
	}
	
	else if (request.url === '/style.css'){
		
		response.statusCode = 200;
		response.setHeader('Content-Type', 'text/css');
		
		/*write style.css*/
		response.write(style_css);
		
		/*send*/
		response.end();
		return;
	}
	
	else {
		
		response.statusCode = 404;
		response.setHeader('Content-Type', 'text/html');
		
		/*write 404.html*/
		response.write(html_404);
		
		/*send*/
		response.end();
		return;
		
	}
}

var server = http.createServer(requestHandler);
var port = (process.env.PORT || 3000);
server.listen(port, function(){console.log("Started; Listening on:", port);});
