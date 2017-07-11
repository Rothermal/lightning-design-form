/**
 * Created by Mark on 7/10/17.
 */
var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/',function(request,response){
    response.sendFile(path.join(__dirname,"../public/views/index.html"));
});


router.get('/*', function(request, response){
    response.redirect('/');
});



module.exports = router;