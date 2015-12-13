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

app.get('/api/v1/create/issue/:a/:b/:c', function(request, response){
	//GET restful endpoints
	response.end();
});

app.listen(3000, function(){
	console.log('listening on port 3000');	
});