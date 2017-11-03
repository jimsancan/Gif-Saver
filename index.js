var express = require('express');
var path = require('path');

var app = express();
var router = express.Router();

app.use(express.static(path.resolve(__dirname)))

app.get('/', (req, res) => {
  res.render('index.html')
})

router.get('/', (req,res, next) => {
  requestAnimationFrame({
    uri: 'https://dog.ceo/dog-api',
  }).pipe(res);
});  //
module.exports = router;

// app.post()

app.listen(3000, () => {console.log('app is listening on port 3000')})
