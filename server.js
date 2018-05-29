var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var axios = require('axios');
var app = express();
var db = require('./db.js');
var keys = require('./keys.js');

app.use(bodyParser.json())

app.use(express.static(path.resolve(__dirname)))
  

app.get('/', (req, res) => {
  res.render('index.html')
});

app.get('/gifs', function(req,res) {
  axios.get(keys.key)
  .then(function(response){ res.send(response.data)})
  .catch(function(error){console.error(error)})
});

app.post('/dbreq', function(req,res){
  console.log(req.body);
  db.savePhoto(req.body.url);
  res.send(); //good practice to end 
})


app.listen(3050, () => {console.log('app is listening on port 3050')})
