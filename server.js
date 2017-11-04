const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

/**
*Create .tpl on res to send data between middlewares
* Create .error on res to send error
*/

app.use(function (req, res, next) {
  res.tpl = {};
  res.tpl.error = [];
  return next();
})
app.get('/',function(req,res,next){
	res.sendfile('haha.html');
})
/**
*Handle the errors
*/
app.use(function(err,req,res,next){
	res.status(500).send('OMG What happend?!');
	console.error(err.stack);
});
var server = app.listen(port, function () {
	console.log("Server is running on port: 3000")
});