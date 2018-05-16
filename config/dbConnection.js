var mysql = require('mysql');
		
var conMySQL = function(){
	console.log("Conexao com db foi estabelecida");
	return mysql.createConnection({
			host:'localhost',
			user:'root',
			password:'',
			database:'portal_noticias'
	});
}
module.exports = function(){
	console.log("Autoload carregou modulo de conexao com o bd")
	return conMySQL;
}
		