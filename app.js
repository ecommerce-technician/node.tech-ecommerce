var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(function(request, response, next) {
	next();
});

app.get('/', function(request, response){
	//loads index file + angular app
	response.sendFile(__dirname + '/public/index.html');
}); 

app.get('/api/v1/read/products', function(request, response){
	var products = [{
		title : 'a sickass hat',
		description : 'a sickhas hat all the babes will be like thats a sickass hat.'
	}]
	response.send(products);
	response.end();
});

app.listen(3000, function(){
	console.log('listening on port 3000');	
});