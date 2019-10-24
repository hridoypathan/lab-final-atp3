var express = require('express');
var db = require('./../models/db');

var router = express.Router();
router.get('/registration', function(request, response){
	response.render("/registration/registration");
});

module.exports = router;



