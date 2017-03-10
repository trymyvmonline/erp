var express = require("express");
var app = express();
var client = require('./client');
var server = require('./server');
app.use('/', client);
app.use('/api', server);
app.use('*',function(req, res, next){
    res.send({'catch':'all'});
});
app.listen(8080, function(){
    console.log('Server running');
})