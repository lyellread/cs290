/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name:Lyell Read
 * Email:readly@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var expressHandlebars = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;

var twitData = require('./twitData');
/*console.log ("== Imported data: ", twitData);*/

/*
From Lecture Notes:

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
*/

app.engine('handlebars', expressHandlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.static('public'));

/* serve the index.html from a layout ... */
app.get('/', function(req, res, next){
	res.status(200).render('twitContainer', {single: false, twitArray: twitData})
});
app.get('/index.html', function(req, res, next){
	res.status(200).render('twitContainer', {single: false, twitArray: twitData})
});

/* serve the route to a specific twit ... */
app.get('/twits/:twitNumber', function (req, res, next){
	var twitIdx = req.params.twitNumber;
	
	if (twitData[twitIdx]){
		res.status(200).render('twitContainer', {single: true, twitArray: twitData[twitIdx]});
	}
	
	else{
		next();
	}
});
		

/* also serve 404.html from the same layout and a different partial */
app.get('*', function(req, res, next){
	res.status(200).render('404Template')
});

/*
app.get('*', function (req, res) {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});
*/

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
