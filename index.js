var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var axios = require('axios');
var app = express();
var router = express.Router();

app.use(express.static(path.resolve(__dirname)))

app.get('/', (req, res) => {
  res.render('index.html')
});



app.use('./db.js', router);

//https://dog.ceo/dog-api

app.get('/dogs', (req,res) => {

})

app.listen(3000, () => {console.log('app is listening on port 3000')})
