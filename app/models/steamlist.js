// app/models/steamlist.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var steamListSchema   = new Schema({
    steamid: String,
    userid: String,
    name: String,
    username: String,
    chatid: String
});

module.exports = mongoose.model('steamList', steamListSchema);
