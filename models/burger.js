//Import ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

//Create burger object with functions for the database
var burger = {
	all: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},
	create: function(val, cb){
		orm.insertOne("burgers", "burger_name", val, function(res){
			cb(res);
		});
	},
	update: function(cond, cb){
		orm.updateOne("burgers", "devoured", true, cond, function(res){
			cb(res);
		});
	}
};

//Export the database functions for the controller (burgers_controller.js)
module.exports = burger;