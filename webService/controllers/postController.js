var mongoose = require('mongoose');
var postModel = require('../models/postModel');
var Post = mongoose.model('Post', postModel);

exports.list_all_posts = function(req, res) {
    Post.find({}, function(err, post) {
        if (err)
            res.send(err);
        res.json(post);
    });
};

exports.create_a_post = function(req, res) {
    var new_post = new Post(req.body);
    new_post.save(function(err, post) {
        if (err)
            res.send(err);
        res.json(post);
    });
};