var express = require('express');
var user_viewModel = require('./../models/user_view-model');

var router = express.Router();


router.get('/adduser_view', function(request, response){
	response.render("user_view/movie");
});
router.get('/adduser_view', function(request, response){
	response.render("user_view/software");
});


});

module.exports = router;



