var express = require("express");
var app = express();
var apis = require("./api");
for (var i = 0; i < apis.length; i++) {
    var api = apis[i];
    app.use(api);
}
module.exports = app;