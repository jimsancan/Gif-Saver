var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.resolve(__dirname)))

app.get('/', (req, res) => {
  res.render('index.html')
})

// app.get()  //

// app.post()

app.listen(3000, () => {console.log('app is listening on port 3000')})
