//var dbConnection = require('../../config/dbConnection');

module.exports = function(app){
	
	app.get('/noticias', function(req, res){
		var connection = app.config.dbConnection();// recupera o modulo que faz conexao com o banco
		connection.query('select * from noticias', function(error, result){
			res.render("noticias/noticias", {noticias : result});
		});
	});
	
};
