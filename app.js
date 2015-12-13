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
	response.send("Hello World");
	response.end();
});

app.listen(3000, function(){
	console.log('listening on port 3000');	
});