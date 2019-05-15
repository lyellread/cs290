/*
 * Write your server code in this file.
 *
 * name:
 * email:
 */

var http = require('http');

function fun1 () {

	console.log ("== Yeetus");

}

var server = http.createServer(fun1);
server.listen(3000, function(){
	console.log("Listening");
});
