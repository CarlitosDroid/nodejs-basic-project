var express = require("express");
var router = express.Router();
var DataBaseHandler = require("../config/DataBaseHandler");
var dataBaseHandler = new DataBaseHandler();

var connection = dataBaseHandler.createConnection();

router.get('/', function (req, res, next) {
  connection.query("SELECT * FROM CUSTOMER", function (err, rows, fields) {
    if(err) throw err;
    res.status(200).send(rows);
  });
});

router.post('/endpoint', function(req, res){
  var obj = {};
  console.log('body: ' + JSON.stringify(req.body));
  res.send(req.body);
});

module.exports = router;