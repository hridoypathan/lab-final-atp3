var express = require('express');
var db = require('./../models/db');

var router = express.Router();

router.get('/', function(request, response){

		
			response.redirect('/registration');
			
});

module.exports = router;



