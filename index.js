var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var axios = require('axios');
const giphy = require('giphy-api-without-credentials')();
var app = express();
var router = express.Router();

app.use(bodyParser.json())

app.use(express.static(path.resolve(__dirname)))

app.get('/', (req, res) => {
  res.render('index.html')
});

app.get('/gifs', function(req,res) {
  axios.get('https://api.giphy.com/v1/gifs/random?api_key=M5y7v64maGCzkUuyIkwmuv35tTAP2CCE&tag=&rating=G')
  .then(function(response){ res.send(response.data)})
  .catch(function(error){console.error(error)})
});


app.listen(3000, () => {console.log('app is listening on port 3000')})
