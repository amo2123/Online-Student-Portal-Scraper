var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:path', function(req, res, next) {
  res.sendFile("C:/Users/Nishant/Desktop/dbmsproject/"+req.params.path);
});

module.exports = router;
