var Posts = require('../repositories/dao');

exports.createPost = function (req, res, next) {
    var post = {
        name: req.body.name,
        description: req.body.description
    };

    Posts.create(post, function(err, post) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Post created successfully"
        })
    })
}

exports.getPosts = function(req, res, next) {
    Posts.get({}, function(err, posts) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            posts: posts
        })
    })
}

exports.getPost = function(req, res, next) {
    Posts.get({name: req.params.name}, function(err, posts) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            posts: posts
        })
    })
}

exports.updatePost = function(req, res, next) {
    var post = {
        name: req.body.name,
        description: req.body.description
    }
    Posts.update({_id: req.params.id}, post, function(err, post) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Post updated successfully"
        })
    })
}

exports.removePost = function(req, res, next) {
    Posts.delete({_id: req.params.id}, function(err, post) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Post deleted successfully"
        })
    })
}