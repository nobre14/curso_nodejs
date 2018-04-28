var http = require('http');

var server = http.createServer( function(req, res){
	var catergoria = req.url;
	if(catergoria == '/tecnologia'){
		res.end("<html><body>Tecnologia</body></html>");
	} else if(catergoria == '/beleza'){
		res.end("<html><body>Beleza</body></html>");
	} else if(catergoria == '/moda'){
		res.end("<html><body>moda</body></html>");
	} else{
		res.end("<html><body>Portal de noticias</body></html>");
	}
});

server.listen(3000);