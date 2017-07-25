//Require MySQL connection
var connection = require("../config/connection.js");

//Create ORM methods to use with the model/controller
var orm = {
	//Show all data in database
	selectAll: function(table, cb){
		connection.query("SELECT * FROM "+table, function(err, result){
			if (err) throw err;
			cb(result);
		});
	},
	//Create new data entry to database
	insertOne: function(table, tableCol, value, cb){
		var queryString = "INSERT INTO " + table + " (" + tableCol + ") VALUES ('" + value + "')";
		console.log(queryString);
		connection.query(queryString, function(err, result){
			if (err) throw err;
			cb(result);
		});
	},
	//Update boolean status in database
	updateOne: function(table, tableCol, tableColVal, condition, cb){
		var queryString = "UPDATE " + table + " SET " + tableCol + " = " + tableColVal + " WHERE " + condition;
		console.log(queryString);
		connection.query(queryString, function(err, result){
			if (err) throw err;
			cb(result);
		});
	}
};

//Export ORM object for the model (burgers.js)
module.exports = orm;