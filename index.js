var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var axios = require('axios');
const giphy = require('giphy-api-without-credentials')();
var app = express();
var router = express.Router();

app.use(express.static(path.resolve(__dirname)))

app.get('/', (req, res) => {
  res.render('index.html')
});


// giphy.random({
//     tag: 'superman',
//     rating: 'g',
//     fmt: 'json'
// }, function(err, res) {
//  if (err) return 'err';
//  return (res);
// });

//Giphy api key M5y7v64maGCzkUuyIkwmuv35tTAP2CCE

// axios.get('')
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });

app.listen(3000, () => {console.log('app is listening on port 3000')})
