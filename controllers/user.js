var express = require('express');
var userModel = require('./../models/user-model');

var router = express.Router();


router.get('/tvseries', function(request, response){
	response.render("user_view/tvseries");
});









module.exports = router;



