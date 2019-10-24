var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/login/index', function(request, response){
	response.render('login/index');
});



module.exports = router;


