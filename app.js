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
	var products = [
		{
			title : 'Product 1',
			category : 'Product Category 2',
			description : 'Product 1 description',
			imageLink : 'http://placehold.it/250x250',
			price : 8.50
		},
		{
			title : 'Product 2',
			category : 'Product Category 2',
			description : 'Product 2 description',
			imageLink : 'http://placehold.it/250x250',
			price : 2.34
		}
	]
	response.send(products);
	response.end();
});

app.listen(3000, function(){
	console.log('listening on port 3000');	
});