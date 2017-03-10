var express = require("express");
var router = express.Router();

router
    .route('/')
    .get(function(req, res, next){
        res.send({'component':'api','version':'1.0.0.0'});
    });

module.exports = router;
