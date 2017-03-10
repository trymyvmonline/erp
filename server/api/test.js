var express = require("express");
var router = express.Router();

router
    .route('/test')
    .get(function(req, res, next){
        res.send({'hello':'world'});
    });

module.exports = router;
