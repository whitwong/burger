//Require Express and import burger model to use its database functions
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//Create routes
//Show all data in database
router.get("/", function(req, res){
	burger.all(function(data){
		res.render("index", {burgers: data})
	});
});
//Add an entry to database
router.post("/", function(req, res){
	burger.create(req.body.name, function(){
		res.redirect("/");
	});
});
//Update boolean status in database
router.put("/:id", function(req, res){
	var idVal = "id = " + req.params.id;
	burger.update(idVal, function(){
		res.redirect("/");
	});
});

//Export routes for server.js to use
module.exports = router;