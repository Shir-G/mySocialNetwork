//Import the mongoose module
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var postSchema = new schema({
    text: String,
    likes: Number,
    date: Date
}, {collection: 'posts'});

module.exports = mongoose.model('Post', postSchema);