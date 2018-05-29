var mongoose = require('mongoose');
var dbKey = require('./keys.js')
mongoose.connect(dbKey.dbconnect, {useMongoClient:true});

var Schema = mongoose.Schema;

var Photos = new Schema ({
  url: String
});

var PhotoModel = mongoose.model('Photos', Photos);

let photo = (url) => {
  console.log(url);
  PhotoModel.create({
    url: url
  })
}

module.exports.savePhoto = photo;