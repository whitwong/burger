//Require mysql npm module
var mysql = require("mysql");
var connection;

//Create connection for MySQL database
if (process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
	connection = mysql.createConnection({
		port: 3306,
		host: "localhost",
		user: "root",
		password: "SnowFun1",
		database: "burgers_db"
	});
};

//Make connection to MySQL database
connection.connect(function(err){
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//Export connection for orm.js
module.exports = connection;