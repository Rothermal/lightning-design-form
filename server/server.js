/**
 * Created by Mark on 7/10/17.
 */
var express = require('express');
var index = require('./routes/index');
var app = express();
var port =  process.env.PORT || 1985;


app.use(express.static('server/public'));


app.use('/',index);




var server = app.listen(port,function(){
    var port = server.address().port;
    console.log('Serving Clients successfully since : ', port);
});
