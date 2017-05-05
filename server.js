var express = require('express');
var app = express();
app.use(function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.listen('8126', function(){
	console.log('listening to 8126');
})