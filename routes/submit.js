var express = require('express');
var router = express.Router();
var fs = require('fs');
const path = require('path');

router.get('/', function(req, res, next) {

  var io = req.io;

  io.on("started", function(){
    
  })
});


module.exports = router;
